const mongoose = require('mongoose');
const dbUser = require('../database/models');

// Define your database controllers here!
// Ex: Create, Update, Delete, etc.

module.exports = {

  create: function (req, res) {
    const { email } = req.body;
    // ADD VALIDATION
    dbUser.User.findOne({ email: email }, (err, user) => {
      if (err) {
        console.log('User.js post error: ', err)
        res.json({
          error: `Sorry, Error occured.`
        })
      } else if (user) {
        console.log(`Sorry, already a user with the email: ${email}`);
        res.json({
          error: `Sorry, already a user with the email: ${email}`
        })
      } else {
        dbUser.User.create(req.body)
          .then(function (user) {
            // View the added result in the console
            console.log(user);
            res.json(user);
          })
          .catch(function (err) {
            // If an error occurred, send it to the client
            return res.status(422).json(err);
          });
      }
    })
  },

  update: function (req, res) {
    console.log("update");
    dbUser.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  get: function (req, res) {
    dbUser.User.findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};

