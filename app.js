// Require node modules
const express = require('express');
const config = require('./config/db');
const mongoose = require('mongoose');
var request = require('request');
var User = require('./models/user');
var Album = require('./models/album');
var AlbumController = require('./controllers/AlbumsController');
var SeedController = require('./controllers/SeedController');

// Connect to database
mongoose.connect(config.url);
var con = mongoose.connection;

con.on('error', function (err) {
	console.log(err);
});

con.once('open', function() {
  console.log('Database connected!')
});


// Album names

const albums = [
	'the_college_dropout',
	'late_registration',
	'graduation',
	'808s_&amp;_heartbreak',
	'my_beautiful_dark_twisted_fantasy',
	'yeezus',
	'the_life_of_pablo'
];

var app = express();

// Set appliction values
app.set('port', process.env.PORT || 3000);

app.get('/',function (req,res) {
	request('http://www.kanyerest.xyz/api/album/the_life_of_pablo', function (error, response, body) {
	  var album = JSON.parse(body).result;
	  var a = new Album();
	  a.title = album[0].title;
	  a.album = album[0].album;
	  a.lyrics = album[0].lyrics;
	  a.save(function (err, doc) {
	  	res.send(doc);
	  });
	  
	});
});

// Starting the server
app.listen(app.get('port') ,function () {
	console.log('Application listening on port 3000');
    SeedController.seedDatabase();
});