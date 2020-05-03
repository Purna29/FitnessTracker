/* B"H
 */
const express = require("express");

const food = require("../models/food");

const router = express.Router();

router
  .get("/all", (req, res) => res.send(food.getDiet()))

module.exports = router;
