const { admin, db } = require("./init");

module.exports = (req, res, next) => {
  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = req.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("No token found");
    return res.status(403).json({ error: "Unauthorized" });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      return db
        .collection("users")
        .where("userId", "==", decodedToken.uid)
        .limit(1)
        .get();
    })
    .then((data) => {
      req.user.userId = data.docs[0].data().userId;
      req.user.firstName = data.docs[0].data().firstName;
      req.user.lastName = data.docs[0].data().lastName;
      req.user.image = data.docs[0].data().image;
      req.user.dateCreated = data.docs[0].data().dateCreated;

      return next();
    })
    .catch((err) => {
      console.error("Error verifying the token", err);
      return res
        .status(403)
        .json({ error: "Something went wrong, please try again!" });
    });
};
