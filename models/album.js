var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Album = new Schema({
	title: String,
	songs: []
});

module.exports = mongoose.model('Album', Album);