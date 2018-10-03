const mongoose = require("mongoose");
const FunFact = require("../models/funFact-model");


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


  const facts =
  [
"Only 1 percent of the world's water supply is usable; 97 percent is in the ocean and 2 percent is frozen.",
" Americans will use over 2 and a half million plastic bottles every thirty minutes",
"Plastic bags that are thrown into the ocean kill over a million sea creatures a year.",
"Over 60% of the trash that ends in dustbin could be recycled.",
"Recycled paper produces approximately 70% less air pollution than if it was made from raw materials.",
"Glass recycling is separated into colors because glass retains its color even after recycling.",
"One drip one second from a leaky faucet wastes 540 gallons of water a year.",
"For multiple materials, such as tin cans, recycling conserves up to 95% of the fresh water used in our mining and manufacturing processes.",
"Every hour, Americans throw away 2,500,000 plastic bottles.",
"It can take over 500 years for plastic to decompose in our landfills."
  ]

  facts.forEach(oneFact => {
    FunFact.create({description : oneFact})
    .then(newFact => console.log(newFact))
    .catch(err => console.log(err))
  });
