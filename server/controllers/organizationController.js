const mongoose = require('mongoose');
const db = require('../database/models/organization');

// Define your database controllers here!
// Ex: Create, Update, Delete, etc.

module.exports = {

  create: function (req, res) {
    db.Organization.create(req.body)
      .then(function (organization) {
        // View the added result in the console
        console.log(organization);
        res.json(organization);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        return res.status(422).json(err);
      });
  },

  update: function (req, res) {
    console.log("update");
    db.Organization
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  get:function(req,res){
    db.Organization.findOne({ _id: req.params.id })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};

