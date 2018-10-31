const db = require('../database/models/organization');

module.exports = {

  search: function (req, res) {
    const search = req.body.filters.split(",");
    if (search.length == 1 && search[0].match(/[0-9]/g)) {
      db.Organization.find({
        zip: search[0].trim()
      })
        .then(dbModel => {
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    } else {
      console.log(search[0], search[1]);
      db.Organization.find({
        city: search[0].trim(),
        state: search[1].trim()
      })
        .then(dbModel => {
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    }
  }
};
