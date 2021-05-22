const router = require("express").Router();

const { signup, login } = require("../../handlers/users.js");

router.get("/", (req, res) => {
  res.status(201).json({ message: "User" });
});

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
