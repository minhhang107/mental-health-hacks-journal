const router = require("express").Router();
const Auth = require("../../utils/auth");
const {
  getOnePrompt,
  getPromptsOfJournal,
  deletePrompt,
} = require("../../handlers/prompts");

router.get("/:promptId", Auth, getOnePrompt);

router.get("/:journalId/prompts", Auth, getPromptsOfJournal);

// todo: random prompts
// router.get('/random', Auth, ...);

router.delete("/:promptId", Auth, deletePrompt);

module.exports = router;
