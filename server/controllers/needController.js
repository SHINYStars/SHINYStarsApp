const mongoose = require('mongoose');
const db = require('../database/models');

// Define your database controllers here!
// Ex: Create, Update, Delete, etc.

module.exports = {

    new: function (req, res) {
        const orgId = req.body.orgId;
        console.log(orgId);
        db.Need.create({
            need: req.body.need,
            comment: req.body.comment
        })
            .then(function (need) {
                console.log("Need", need._id);
                console.log("orgId", orgId);
                // View the added result in the console
                db.Organization.findByIdAndUpdate(req.body.orgId, { $push: { needs: need._id } }, { new: true }, function (err, obj) {
                    if (err) return handleError(err);
                    console.log(need);
                    res.json(need);
                });


            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                return res.status(422).json(err);
            });
    },

    getNeeds: function (req, res) {
        let organization;
        db.Organization.findById(req.params.orgId).populate('needs')
            .then(dbModel =>{
                organization=dbModel;
                console.log("Organization:",organization);
                res.json(organization);
               
            } )
            .catch(err => res.status(422).json(err));
    },

    removeNeed: function (req, res) {
        db.Need
            .findByIdAndUpdate({ _id: req.params.needId })
            .then(dbNeed => dbNeed.remove())
            .then(dbNeed => res.json(dbNeed))
            .catch(err => res.status(422).json(err));
    }

};

