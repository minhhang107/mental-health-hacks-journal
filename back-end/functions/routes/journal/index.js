const router = require("express").Router();
const Journal = require("./journal");

router.use("/journals", Journal);

module.exports = router;
