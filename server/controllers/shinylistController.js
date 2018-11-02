const mongoose = require('mongoose');
const db = require('../database/models');

// Define your database controllers here!
// Ex: Create, Update, Delete, etc.

module.exports = {

  create: function (req, res) {
    console.log("Need", req.body.needId);
    console.log("userId", req.body.userId);
    // View the added result in the console
    db.User.findByIdAndUpdate(req.body.userId, { $push: { shinylist: req.body.needId } }, { new: true }, function (err, obj) {
      if (err) return handleError(err);
      console.log(obj);
      res.json(obj);
    });
  },

  get: function (req, res) {

    db.User.findById({ _id: req.params.id }).populate('shinylist')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }


};

