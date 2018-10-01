const mongoose = require("mongoose");
const products = require("../models/product-model");
var slugify = require("slugify");
// const productDatabase import database

mongoose.Promise = Promise;
mongoose //make sure the name is the same as in app.js
  .connect(
    "mongodb://localhost/recycle",
    { useMongoClient: true }
  )
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

products
  .find()
  .then(allItems => {
    allItems.forEach(eachProduct => {
      eachProduct.urlId = slugify(
        eachProduct.fields.typologie_des_dechets
      ).toLowerCase();
      console.log(eachProduct.urlId);
    });
  })
  .catch(err => next(err));
