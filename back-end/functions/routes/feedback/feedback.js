const router = require("express").Router();

const Auth = require("../../utils/auth");
const {
  getFeedbacksOfPrompt,
  addFeedback,
  deleteFeedback,
} = require("../../handlers/feedbacks");

router.get("/:promptId/feedbacks", Auth, getFeedbacksOfPrompt);

router.post("/create", Auth, addFeedback);

router.delete("/:feedbackId", Auth, deleteFeedback);

module.exports = router;
