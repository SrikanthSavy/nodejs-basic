// Import the express module
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

// Create an Express application instance
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());


//Require the Router we defined in movies.js
var movies = require('./movies.js');

//Use the Router on the sub route /movies
app.use('/movies', movies);

app.listen(3000);

// Import the router module from 'router.js'
// This module is expected to define and handle various routes
var router = require('./router.js');