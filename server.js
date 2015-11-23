// requiring libs
var app = require('express')();
var server = require('http').Server(app);
var mongoose = require('mongoose');           // mongoose for mongodb
var port     = process.env.PORT || 8080;        // set the port
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var colors = require('colors');
var moment = require('moment');
var Q = require('q');

// routes
app.get('/', function(req, res) {
  // get me my data

  // covert the data

  // send data to frontend
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/data', function(req, res) {
  res.sendFile(__dirname + '/public/data.csv');
});

app.get('/js/app.js', function(req, res) {
  res.sendFile(__dirname + '/public/js/app.js')
});

app.get('/jquery', function(req, res) {
  res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.min.js')
});


// listen (start app with node server.js)
server.listen(port);
console.log("App listening on port " + port);