const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({


    firstName: { type: String, required: true },
    lastName: { type: String, required: true},
    password: { type: String, required: true },


    phonenumber1: { type: String, required: true },
    phonenumber2: { type: String, required: false },

    email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
    organization: { type: Boolean, default: false, required: true }
})

const User = mongoose.model("User", userSchema);

module.exports = User;