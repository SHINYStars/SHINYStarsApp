const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    orgName: {
        type: String,
        required: true
    },

    website: {
        type: String,
        required: true
    },

    address1: {
        type: String,
        required: false
    },

    address2: {
        type: String,
        required: false,
    },

    city: {
        type: String,
        required: false,
    },

    state: {
        type: String,
        required: false,
    },

    country: {
        type: String,
        required: false,
    },

    zip: {
        type: String,
        required: false,
    },

    phoneNumber: {
        type: String,
        required: false,
    },

    email: {
        type: String,
        required: true
    }
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
