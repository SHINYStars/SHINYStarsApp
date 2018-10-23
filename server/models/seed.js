const mongoose = require('mongoose');
// const Product = require('../models/product');


const User = require("./user/user")

//Non-Profit Organization
const Organization  = require('../models/organization');

// Below is an example of a method that seeds your database
// Customize it to fit your needs, and execute it by calling it on a custom route
// Make sure to create your schemas and plug them in - this code won't work!
exports.seedDb = () => {

     try {
        Organization.insertMany( [
           { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com"}, 
           { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com"}, 
           { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com"}, 
           { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com"}, 
           { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com"} 
        ]).then((organizations) => console.log('Organizations added to DB!', organizations));


exports.seedDb = () => {
    try {
        Product.insertMany( [
           { _id: new mongoose.Types.ObjectId(),  _id: "id", firstName: "first name", lastName: "last name", password: "passs", phonenumber1: "123-456-7890", phonenumber2: "123-456-7890", emailaddress: "ex@mple.com" },
           { _id: new mongoose.Types.ObjectId(),  _id: "id", firstName: "first name", lastName: "last name", password: "passs", phonenumber1: "123-456-7890", phonenumber2: "123-456-7890", emailaddress: "ex@mple.com" },
           { _id: new mongoose.Types.ObjectId(),  _id: "id", firstName: "first name", lastName: "last name", password: "passs", phonenumber1: "123-456-7890", phonenumber2: "123-456-7890", emailaddress: "ex@mple.com" },
           { _id: new mongoose.Types.ObjectId(),  _id: "id", firstName: "first name", lastName: "last name", password: "passs", phonenumber1: "123-456-7890", phonenumber2: "123-456-7890", emailaddress: "ex@mple.com" },
           { _id: new mongoose.Types.ObjectId(),  _id: "id", firstName: "first name", lastName: "last name", password: "passs", phonenumber1: "123-456-7890", phonenumber2: "123-456-7890", emailaddress: "ex@mple.com" }
        ]).then((docs) => console.log('users added!', docs))
     } catch (e) {
        console.log (e);
     }

}
