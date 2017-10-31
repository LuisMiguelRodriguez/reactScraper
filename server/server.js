// Dependencies
var express    = require('express'),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser'),

    //Our Scraping tools
    cheerio    = require('cheerio'),
    request    = require('request');


// Requiring our Note and Article models
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


// Create an instance of the express app.
var app = express();

// Specify the port.
var  PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static('public'));

// Database configuration with mongoose
mongoose.connect('mongodb://localhost/reactscraper');
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
  console.log("Mongoose connection successful.");
});
