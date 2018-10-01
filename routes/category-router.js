const express = require("express");
const router = express.Router();

const products = require("../models/product-model");

router.get("/all-categories", (req, res, next) => {
  products
    .find()
    .then(productCategory => {
      res.json(productCategory);
    })
    .catch(err => next(err));
});

module.exports = router;
