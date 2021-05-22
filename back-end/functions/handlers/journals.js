const { admin, db } = require("../utils/init");

exports.getUsersJournals = (req, res) => {
  db.collection("journals")
    .where("userId", "==", `${req.user.userId}`)
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let journals = [];
      data.forEach((doc) => {
        journals.push({
          journalId: doc.id,
          content: doc.data().content,
          dateCreated: doc.data().dateCreated,
          userId: doc.data().userId,
          moodStatus: doc.data().moodStatus,
          moodScore: doc.data().moodScore,
        });
      });

      return res.json(journals);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "Something went wrong, please try again!" });
    });
};

exports.getOneJournal = (req, res) => {
  let journalData = {};
  db.doc(`/journals/${req.params.journalId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(400).json({ error: "Journal not found" });
      }
      journalData = doc.data();
      journalData.journalId = doc.id;
      return res.status(200).json(journalData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Something went wrong, please try again" });
    });
};

exports.addJournal = (req, res) => {
  if (req.body.content.trim() === "") {
    return res.status(400).json({ error: "Content must not be empty" });
  }

  const newJournal = {
    content: req.body.content,
    userId: req.user.userId,
    dateCreated: new Date().toISOString(),
    // todo: mood status
    // todo: mood score
  };

  db.collection("journals")
    .add(newJournal)
    .then((doc) => {
      const resJournal = newJournal;
      resJournal.journalId = doc.id;
      res.status(200).json(resJournal);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "Something went wrong, please try again!" });
    });
};

// delete journal
exports.deleteJournal = (req, res) => {
  const document = db.doc(`/journals/${req.params.journalId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(400).json({ error: "Journal not found!" });
      }
      if (doc.data().userId !== req.user.userId) {
        return res.status(403).json({ error: "Unauthorized" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      // delete all of its related prompts
      db.collection("prompts")
        .where("journalId", "==", `${req.params.journalId}`)
        .get()
        .then((docs) => {
          const batch = db.batch();
          docs.forEach((doc) => {
            batch.delete(doc.ref);
          });

          // commit the batch
          return batch.commit();
        });
    })
    .then(() => {
      res
        .status(200)
        .json({ message: "Journal has been deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Something went wrong, please try again" });
    });
};
