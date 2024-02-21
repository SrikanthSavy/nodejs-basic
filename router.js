// Import the express module
var express = require('express');

// Create a new router object to handle requests
var router = express.Router();



var movies = [
    {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
    {id: 102, name: "Inception", year: 2010, rating: 8.7},
    {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
    {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
 ];

 
// Define a GET route for the root path ('/')
// This route responds to GET requests by sending a text message
router.get('/', (req, res) => {
    res.send("GET Route on Router ");
});

// Define a GET route with a parameter 'id' that accepts only a 4-digit number
// This route demonstrates how to use regular expressions in route parameters
// It responds by sending the 'id' value back in the response
router.get('/:id([0-9]{4})', (req, res) => {
    res.send("GET Route on things with parameter Id: " + req.params.id);
});

// Define a GET route with two parameters: 'id' and 'name'
// This route responds by sending both parameter values back in the response
// It demonstrates handling routes with multiple parameters
router.get('/:id/:name', (req, res) => {
    res.send("GET Route on things with parameter: " + req.params.id + " and name: " + req.params.name);
});

// Define a POST route for the root path ('/')
// This route responds to POST requests by sending a text message
// It's an example of handling POST requests in Express
router.post('/', (req, res) => {
    res.send("POST route on things");
});

//Last route , as if nothing matches , (*) wild charater is consifers. 
//Note: Always keep it at the end
router.get('*', (req,res)=>{
  res.send("Sorry, its an invalid URL. Please check your URL");
});

// Export the router to be used in other parts of the application (like index.js)
// This is necessary for the router to be accessible in the main app file
module.exports = router;
