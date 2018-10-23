const mongoose = require('mongoose');
const Product = require('../models/product');

//Non-Profit Organization
const Organization  = require('../models/organization');

// Below is an example of a method that seeds your database
// Customize it to fit your needs, and execute it by calling it on a custom route
// Make sure to create your schemas and plug them in - this code won't work!
exports.seedDb = () => {
    // try {
    //     Product.insertMany( [
    //        { _id: new mongoose.Types.ObjectId(), item: "card", price: Math.floor(Math.random()*50), qty: 15, desc: 'you will love sending your mail with this'  },
    //        { _id: new mongoose.Types.ObjectId(), item: "envelope", price: Math.floor(Math.random()*50), qty: 20, desc: 'what is this, a post office?' },
    //        { _id: new mongoose.Types.ObjectId(), item: "stamps" , price: Math.floor(Math.random()*50), qty: 30, desc: 'write you are!' },
    //        { _id: new mongoose.Types.ObjectId(), item: "notepad" , price: Math.floor(Math.random()*50), qty: 30, desc: 'Jot to your hearts content' },
    //        { _id: new mongoose.Types.ObjectId(), item: "bubble wrap", price: Math.floor(Math.random()*50), qty: 30, desc: '*Pop*' }
    //     ]).then((docs) => console.log('Success!', docs))
    //  } catch (e) {
    //     console.log (e);
    //  }

     try {
        Organization.insertMany( [
           { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com"}, 
           { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com"}, 
           { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com"}, 
           { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com"}, 
           { _id: new mongoose.Types.ObjectId(), orgName: "npo1", website: "hhtp://website.com", address1: "123 North St", address2: "Suite A", city: "Walnut Creek", state: "CA", country: "USA", zip: "54597", phoneNumber: "123 456 789", email: "someone@email.com"} 
        ]).then((organizations) => console.log('Organizations added to DB!', organizations));
     } catch (e) {
        console.log (e);
     }     

}
