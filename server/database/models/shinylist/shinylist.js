const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shinyListSchema = new Schema({
    userId: {
        type: String,
        required: true
    },

    needId: {
        type: String,
        required: true
    }
});

const ShinyList = mongoose.model("ShinyList", shinyListSchema);

module.exports = ShinyList;
