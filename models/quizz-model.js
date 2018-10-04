const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizzSchema = new Schema(
    {
    question: { 
    type: String,
    },

    img: {type:String},

    answers: [
        {content: String,
        comment: String,
        point:0,
        }
    ],
}, {
        timestamps: true,
    });


const Quizz = mongoose.model("quizz", quizzSchema);

module.exports = Quizz;
