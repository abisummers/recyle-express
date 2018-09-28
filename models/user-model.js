const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^.+@.+\..+$/,
    },

    encryptedPassword: { type: String },
    role: {
        type: String,
        enum: ["normal"],
        required: true,
        default: "normal",
    },
}, {
        timestamps: true,
    });


const User = mongoose.model("user", userSchema);

module.exports = User;