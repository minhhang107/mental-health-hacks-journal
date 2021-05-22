const { admin, db } = require("../utils/init");

exports.getFeedbacksOfPrompt = (req, res) => {
  db.collection("feedbacks")
    .where("promptId", "==", `${req.params.promptId}`)
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let feedbacks = [];
      data.forEach((doc) => {
        feedbacks.push({
          feedbackId: doc.id,
          userId: doc.data().userId,
          dateCreated: doc.data().dateCreated,
          option: doc.data().option,
          comment: doc.data().comment,
        });
      });

      return res.status(200).json(feedbacks);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "Something went wrong, please try again!" });
    });
};

exports.addFeedback = (req, res) => {
  if (req.body.comment.trim() === "") {
    return res.status(400).json({ error: "Comment must not be empty" });
  }

  if (req.body.option < 1 || req.body.option > 4) {
    return res.status(400).json({ error: "Invalid option selection" });
  }

  const newFeedback = {
    comment: req.body.comment,
    option: req.body.option,
    userId: req.user.userId,
    dateCreated: new Date().toISOString(),
  };

  db.collection("feedbacks")
    .add(newFeedback)
    .then((doc) => {
      const resFeedback = newFeedback;
      resFeedback.feedbackId = doc.id;
      res.status(200).json(resFeedback);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "Something went wrong, please try again!" });
    });
};

exports.deleteFeedback = (req, res) => {
  const feedback = db.doc(`/feedbacks/${req.params.feedbackId}`);

  feedback
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(400).json({ error: "Feedback not found" });
      }
      if (doc.data().userId !== req.user.userId) {
        return res
          .status(403)
          .json({ error: "You're not authorized to delete" });
      } else {
        return prompt.delete();
      }
    })
    .then(() => {
      res
        .status(200)
        .json({ message: "Feedback has been deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Something went wrong, please try again!" });
    });
};
