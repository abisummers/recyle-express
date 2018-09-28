const express = require("express");
const router = express.Router();

const recycling = require("../public/models/product-model");

router.get("/search-result", (req, res, next)=> {
    recycling.find()
        .then(productsArray => {
            // console.log("blah blah blah",productsArray)
            res.json(productsArray)
        })
        .catch(err => next(err));
  });

  module.exports = router;