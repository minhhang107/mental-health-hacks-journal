const { admin, db } = require("../utils/init");

exports.getOnePrompt = (req, res) => {
  let promptData = {};
  db.doc(`/prompts/${req.params.promptId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(400).json({ error: "Prompt not found" });
      }
      promptData = doc.data();
      promptData.promptId = doc.id;
      return res.status(200).json(promptData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Something went wrong, please try again" });
    });
};

exports.getPromptsOfJournal = (req, res) => {
  db.collection("prompts")
    .where("journalId", "==", `${req.params.journalId}`)
    .orderBy("dateCreated", "desc")
    .get()
    .then((data) => {
      let prompts = [];
      data.forEach((doc) => {
        prompts.push({
          promptId: doc.id,
          censoredContent: doc.data().censoredContent,
          userId: doc.data().userId,
          journalId: doc.data().journalId,
          dateCreated: doc.data().dateCreated,
          score: doc.data().score,
          magnitude: doc.data().magnitude,
        });
      });

      return res.status(200).json(prompts);
    })
    .catch((err) => {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Something went wrong, please try again!" });
    });
};

exports.addPrompt = (req, res) => {
  if (req.body.censoredContent.trim() === "") {
    return res.status(400).json({ error: "Content must not be empty" });
  }

  const newPrompt = {
    censoredContent: req.body.censoredContent,
    userId: req.user.userId,
    journalId: req.params.journalId,
    dateCreated: new Date().toISOString(),
    // todo: score
    // todo: magnitude
  };

  db.collection("prompts")
    .add(newPrompt)
    .then((doc) => {
      const resPrompt = newPrompt;
      resPrompt.promptId = doc.id;
      res.status(200).json(resPrompt);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "Something went wrong, please try again!" });
    });
};

// delete prompt
exports.deletePrompt = (req, res) => {
  const document = db.doc(`/prompts/${req.params.promptId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(400).json({ error: "Prompt not found!" });
      }
      if (doc.data().userId !== req.user.userId) {
        return res.status(403).json({ error: "Unauthorized" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.status(200).json({ message: "Prompt has been deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Something went wrong, please try again" });
    });
};
