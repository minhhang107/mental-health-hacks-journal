const router = require("express").Router();
const Prompt = require("./prompt");

router.use("/prompts", Prompt);

module.exports = router;
