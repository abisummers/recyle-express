const express = require("express");
const router = express.Router();

const products = require("../models/product-model");

// -------------------- ALL CATEGORIES ---------------
router.get("/all-categories", (req, res, next) => {
  products
    .find()
    .then(productCategory => {
      res.json(productCategory);
    })
    .catch(err => next(err));
});

//----------------- INDIVIDUAL CATEGORIES ----------

router.get("/material/:id", (req, res, next) => {
  products
    .find({urlId: req.params.id})
    .then(productCategory => {
      res.json(productCategory);
    })
    .catch(err => next(err));
});

module.exports = router;
