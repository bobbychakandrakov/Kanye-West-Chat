var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Song = new Schema({
	title: String,
	lyrics: String,
	album: String
});

module.exports = mongoose.model('Song', Song);