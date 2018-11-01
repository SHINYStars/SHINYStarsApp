const mongoose = require('mongoose');
const db = require('../database/models');

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

  getOne: function (req, res) {
    db.Organization.find({ userId: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    console.log("PARAMETERS:");
    console.log(req.body);
    db.Organization
      .findOneAndUpdate({ userId: req.body.userId }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  get: function (req, res) {
    db.Organization.findById(req.params.orgId).populate('needs')
        .then(dbModel => {
          console.log(dbModel);
          res.json(dbModel)})
        .catch(err => res.status(422).json(err));
}

};
