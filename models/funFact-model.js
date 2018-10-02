const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const funFactSchema = new Schema(
  {
    author: { type: String, required: true },
    description: [{ type: String, minlength: 5 }]
  },
  {
    timestamps: true,

    collection: "fun-facts"
  }
);

const FunFact = mongoose.model("funFact", funFactSchema);

module.exports = FunFact;
