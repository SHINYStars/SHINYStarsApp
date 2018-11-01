const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shinyListSchema = new Schema({
    user: {
        type: String,
        required: true
    },

    needs:[{type: Schema.Types.ObjectId, ref: 'Need'}]

});

const ShinyList = mongoose.model("ShinyList", shinyListSchema);

module.exports = ShinyList;
