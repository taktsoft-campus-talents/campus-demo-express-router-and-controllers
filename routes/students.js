const { Router } = require("express");
const { getStudents, getStudent } = require("../controllers/students");

const router = Router();

router.get("/", getStudents);
router.get("/:index", getStudent);

module.exports = router;
