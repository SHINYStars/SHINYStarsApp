const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    orgName: {
        type: String,
        required: true
    },

    website: {
        type: String,
        required: false
    },

    address1: {
        type: String,
        required: true
    },

    address2: {
        type: String,
        required: false,
    },

    city: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    zip: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    userId: {
        type: String,
        required: true
    },
    needs:[
        {type: Schema.Types.ObjectId, ref: 'Need'}
      ]
});

const Organization = mongoose.model("Organization", organizationSchema);
module.exports =  Organization;
