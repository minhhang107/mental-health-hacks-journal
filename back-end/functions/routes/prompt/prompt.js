const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(201).json({ message: "prompt" });
});

module.exports = router;
