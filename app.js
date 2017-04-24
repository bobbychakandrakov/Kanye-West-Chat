// Require node modules
const express = require('express');
const config = require('./config/db');
const mongoose = require('mongoose');
var User = require('./models/user');

// Connect to database
mongoose.connect(config.url);
var con = mongoose.connection;

con.on('error', function (err) {
	console.log(err);
});

con.once('open', function() {
  console.log('Database connected!')
});


var app = express();

// Set appliction values
app.set('port', process.env.PORT || 3000);

app.get('/',function (req,res) {
	res.send('Hello from API!');
});

// Starting the server
app.listen(app.get('port') ,function () {
	console.log('Application listening on port 3000');
});