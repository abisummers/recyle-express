const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const funFactSchema = new Schema ({
  author: {type: String, required:true},
  description: [
        { type: String, minlength: 5 },
      ]
    }, {
  timestamps: true,
});


const FunFact = mongoose.model("User", funFactSchema);

module.exports = FunFact;