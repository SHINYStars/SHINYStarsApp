const mongoose = require('mongoose');
const db = require('../database/models/shinylist');

// Define your database controllers here!
// Ex: Create, Update, Delete, etc.

module.exports = {

  create: function (req, res) {
    db.ShinyList.create(req.body)
      .then(function (need) {
        // View the added result in the console
        console.log(need);
        res.json(need);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        return res.status(422).json(err);
      });
  },

  get:function(req,res){
    db.ShinyList.find({ userId: req.params.userId })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }


};

