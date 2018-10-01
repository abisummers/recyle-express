const mongoose = require("mongoose");
const Product = require("../models/product-model");
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

Product.find()
  .then(allItems => {
    // let idsArray = allItems.map(oneItem => {
    //   return oneItem._id;
    // });

    allItems.forEach(oneItem => {
      const { fields } = oneItem;
      oneItem.urlId = slugify(fields.typologie_des_dechets).toLowerCase();
      oneItem
        .save()
        .then(() => console.log(`Updated ${fields.typologie_des_dechets}`))
        .catch(err => console.log("Update Error", err));
    });
  })
  .catch(err => console.log("Find Error", err));
