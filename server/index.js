require('dotenv').config();
// Initialize Express
const express = require('express');
const app = express();
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./passport");
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)

// Import routes
const routes = require('./routes');

// Import Node native modules
const http = require('http');
const path = require('path');

// Import Middleware
const morgan = require('morgan');  // Helps us develop and debug locally
const cors = require('cors'); // Helps us bypass CORS issues when developing locally
const bodyParser = require('body-parser'); // Helps us extract features from req.body

class App {
    constructor() {
        this.port = process.env.PORT || 3080;
        this.server = http.createServer(app);
        //this.initDb();
        this.initMiddleware();
        this.run();
    }
    
    initMiddleware() {
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json({ type: '*/*'})); // Type indicates ALL header types OK
        app.use(express.static(path.resolve(__dirname, '..', '..', 'public'))) // Serve files in our Rect app public directory
        
        // We need to use sessions to keep track of our user's login status
        app.use(
            session({ 
                secret: "twinkle stars", 
                store: new MongoStore({ mongooseConnection: dbConnection }),
                resave: true, 
                saveUninitialized: true }));
        app.use(passport.initialize());
        app.use(passport.session());

        app.use(routes);

        if (process.env.NODE_ENV === 'production') 
            app.use(express.static('client/build'));
        if (process.env.NODE_ENV === 'test') 
            app.use(morgan(() => null));
        else 
            app.use(morgan('API Request (port ' + this.port + '): :method :url :status :response-time ms - :res[content-length]'));   
    }
    run() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`)
        })        
    }
}

new App();



