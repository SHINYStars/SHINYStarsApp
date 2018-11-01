const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const needSchema = new Schema({

    need: {
        type: String,
        required: true
    },

    comment: {
        type: String,
        required: false
    }

});

const Need = mongoose.model("Need", needSchema);

module.exports = Need;
