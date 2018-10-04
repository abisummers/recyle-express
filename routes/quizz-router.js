const express = require("express");
const router = express.Router();

const quizz = require("../models/quizz-model");

router.get("/quizz", (req, res, next) => {
  quizz
    .find()
    .then(questionsArray => {
      // console.log("blah blah blah",questionsArray)
      res.json(questionsArray);
    })
    .catch(err => next(err));
});

module.exports = router;
