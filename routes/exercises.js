const express = require("express");

const { authentificate } = require("../middlewares");
const { getExercises, getExerciseGroups } = require("../controllers/exercises");

const router = express.Router();

router.get("/", authentificate, getExercises);
router.get("/exercisegroups", authentificate, getExerciseGroups);
module.exports = router;