const mongoose = require('mongoose');
const db = require('../database/models/volunteer');

// Define your database controllers here!
// Ex: Create, Update, Delete, etc.

module.exports = {

    new: function (req, res) {
        db.Volunteer.create(req.body)
            .then(function (volunteer) {
                console.log(volunteer);
                res.json(volunteer);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                return res.status(422).json(err);
            });
    }

};