/* B"H
 */
const express = require("express");

const exercise = require("../models/exercise");

const router = express.Router();

router
  .get("/all", (req, res) => res.send(exercise.getExercise()))

module.exports = router;
