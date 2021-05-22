const router = require("express").Router();
const Auth = require("../../utils/auth");
const {
  getUsersJournals,
  getOneJournal,
  addJournal,
  deleteJournal,
} = require("../../handlers/journals");

// ..../api/journals/
router.get("/", Auth, getUsersJournals);

router.get("/:journalId", Auth, getOneJournal);

router.post("/create", Auth, addJournal);

router.delete("/:journalId", Auth, deleteJournal);

module.exports = router;
