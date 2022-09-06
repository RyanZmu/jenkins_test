// Load the express module
var express = require('express')
var app = express()

// Respond to requests for / with "Hello World"
app.get('/',function(req,res) {
    res.send("Hello World")
})

// Listen on port 80 (like a real web server)
app.listen(80, () => console.log('Express server started successfully'))