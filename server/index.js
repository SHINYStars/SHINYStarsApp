// Test insert to DB
const seedDb = require('./models/seed').seedDb;

// Initialize Express
const express = require('express');
const app = express();
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Import routes
const router = require('./router');

// Import Node native modules
const http = require('http');
const path = require('path');

// Import Mongoose
const mongoose = require('mongoose');

// Import Middleware
const morgan = require('morgan');  // Helps us develop and debug locally
const cors = require('cors'); // Helps us bypass CORS issues when developing locally
const bodyParser = require('body-parser'); // Helps us extract features from req.body

class App {
    constructor() {
        this.port = process.env.PORT || 3090;
        this.server = http.createServer(app);
        this.initDb();
        this.initMiddleware();
        this.run();
    }
    initDb() {
        try {
            this.db = mongoose.connect(
                process.env.MONGODB_URI || 'mongodb://localhost/shinystars', 
                { useNewUrlParser: true } // Helps us avoid deprecation errors.
            );
            console.log('Successfully connected to database.')
        } catch (error) {
            console.log('Failed to connect to MongoDB.', error)
        }
    }
    initMiddleware() {
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json({ type: '*/*'})); // Type indicates ALL header types OK
        app.use(express.static(path.resolve(__dirname, '..', '..', 'public'))) // Serve files in our Rect app public directory
        
        // We need to use sessions to keep track of our user's login status
        app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
        app.use(passport.initialize());
        app.use(passport.session());

        router(app);

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



