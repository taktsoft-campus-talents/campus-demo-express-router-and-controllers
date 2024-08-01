const { Router } = require("express");
const {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote,
} = require("../controllers/notes");

const router = Router();

router.get("/", getNotes);
router.post("/", createNote);
router.get("/:id", getNote);
router.delete("/:id", deleteNote);
router.patch("/:id", updateNote);

module.exports = router;
