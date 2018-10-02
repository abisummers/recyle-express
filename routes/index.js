const express = require("express");
const router = express.Router();
const FunFacts = require("../models/funFact-model");
/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ hello: "hello" });
});

// --------------- FUN FACTS -----------------

router.get("/facts", (req, res, next) => {
  FunFacts.find()
    .then(facts => {
      res.json(facts);
    })

    .catch(err => next(err));
});
module.exports = router;
