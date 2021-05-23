const { admin, db } = require("../utils/init");

const { firebaseConfig } = require("../utils/config");

const { createAWeekTrackerForNewUser } = require("../handlers/weeklyTrackers");

const {
  validateSignupData,
  validateLoginData,
} = require("../utils/validation");

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

exports.signup = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    image: "default-user-image.png",
  };

  const { valid, error } = validateSignupData(newUser);
  console.log(valid, error);
  if (!valid) return res.status(400).json(error);

  let userId, token;
  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const userCredentials = {
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        dateCreated: new Date().toISOString(),
        image: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${newUser.image}?alt=media`,
        userId: userId,
      };

      return db.doc(`/users/${userId}`).set(userCredentials);
    })
    .then(() => {
      return createAWeekTrackerForNewUser(userId);
    })
    .then(() => {
      return res.status(200).json({ token });
    })
    .catch((err) => {
      // user's error
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ error: "Email has already been used" });
      }
      res.status(500).json({ error: "Some went wrong, please try again!" });
    });
};

exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const { valid, error } = validateLoginData(user);

  if (!valid) return res.status(400).json(error);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      // successfully sign in
      return data.user.getIdToken();
    })
    .then((token) => {
      // return token
      return res.status(200).json({ token });
    })
    .catch((err) => {
      console.error(err);
      //auth/user-not-user
      //auth/wrong-password
      return res
        .status(403)
        .json({ error: "Wrong credentials, please try again..." });
    });
};

exports.getAllUsers = () => {
  return db
    .collection("users")
    .get()
    .then((data) => {
      let users = [];
      data.forEach((doc) => {
        users.push({
          userId: doc.data().userId,
          email: doc.data().email,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          dateCreated: doc.data().dateCreated,
          image: doc.data().image,
        });
      });
      return users;
    })
    .catch((err) => {
      console.log(err);
      throw new Error("Problem getting all users");
    });
};
