const router = require("express").Router();
const Feedback = require("./feedback");

router.use("/feedbacks", Feedback);

module.exports = router;
