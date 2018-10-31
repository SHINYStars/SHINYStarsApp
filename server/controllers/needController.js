const mongoose = require('mongoose');
const db = require('../database/models/need');

// Define your database controllers here!
// Ex: Create, Update, Delete, etc.

module.exports = {

    new: function (req, res) {
        db.Need.create(req.body)
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

    getNeeds: function (req, res) {
        db.Need.find({ orgId: req.params.orgId })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    removeNeed: function (req, res) {
        db.Need
            .findById({ _id: req.params.needId })
            .then(dbNeed => dbNeed.remove())
            .then(dbNeed => res.json(dbNeed))
            .catch(err => res.status(422).json(err));
    }

};

