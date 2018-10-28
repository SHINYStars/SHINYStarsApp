const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    email: { 
        type: String, 
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"] 
    }

});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
