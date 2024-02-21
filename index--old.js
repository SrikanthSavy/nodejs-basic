// Import the express module
var express = require('express');

// Create an Express application instance
var app = express();

// Import the router module from 'router.js'
// This module is expected to define and handle various routes
var router = require('./router.js');

/*
// Below are examples of simple routes that have been commented out.

// Define a GET route for the path '/hello'
// When accessed, this route sends a greeting message as a response
app.get('/hello', (req, res) => {
    res.send("Hello, Welcome to Node Js");
});

// Define a GET route for the root path ('/')
// When accessed, this route sends a welcome message as a response
app.get('/', (req, res) => {
    res.send("Welcome");
});
*/
//middleware function in action −
app.use("/router",(req,res,next)=>{
    console.log("A New Request recieved at :"+Date.now());    
    next();
});

// Mount the imported router on the '/router' path
// All routes defined in 'router.js' will be accessible under '/router'
app.use('/router', router);

// Start the Express application listening for requests on port 3000
// The callback function is executed once the server starts successfully
app.listen(3000, () => {
    console.log("Welcome to the Express Example - it's listening");
});
