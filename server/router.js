const path = require('path');
const db = require('./controllers/controller');

module.exports = function(app) {
    // Ensures your react app is being served at all times
    app.get('*', function(req, res, next){ 
        res.sendFile(__dirname, '../client/build/index.html');
    });

    app.get('/login',function(req,res,next){
        res.json(req.params);
    });

    app.get('/user', function(req, res, next){
        res.sendFile(path.join(__dirname, "/.."))
    });
    
   
    // Wire up API routes here!
}