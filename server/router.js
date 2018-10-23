const path = require('path');
const db = require('./controllers/controller');

module.exports = function (app) {
    // Ensures your react app is being served at all times
    app.get('*', function (req, res, next) {
        res.sendFile(__dirname, '../client/build/index.html');
    });

    app.get('/login', function (req, res, next) {
        res.json(req.params);
    });

    // Wire up API routes here!
    
    //Organization Registration
    app.post('/signup/organization/newRegistration', function (req, res, next) {
        db.Organization.newRegistration(req, res);
    });

    
}