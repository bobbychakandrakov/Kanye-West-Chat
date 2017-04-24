// Require node modules
const express = require('express');
const db = require('./config/db');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ChatHeads');
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
	res.send(db.url);
});

app.listen(app.get('port') ,function () {
	console.log('Application listening on port 3000');
});