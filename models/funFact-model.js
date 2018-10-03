const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const funFactSchema = new Schema(
  {
    description: { type: String, minlength: 5 }
  },
  {
    timestamps: true,
  }
);

const FunFact = mongoose.model("FunFact", funFactSchema);

module.exports = FunFact;