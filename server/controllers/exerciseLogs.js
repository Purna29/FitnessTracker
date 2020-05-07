/* B"H
 */
const express = require("express");

const exerciseLogs = require("../models/ExerciseLogs");

const router = express.Router();

router
  .get("/all", (req, res) => res.send(exerciseLogs.getExerciseLogs()))
  .get("/types", (req, res) => res.send(exerciseLogs.getExerciseTypes()))
  .post('/calculate', (req, res) => {
    try {
        const result = exerciseLogs.addExerciseLogs(req.body);
        res.send(result);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

module.exports = router;
