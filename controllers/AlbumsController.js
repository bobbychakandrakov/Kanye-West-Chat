var Album = require('../models/album');
var request = require('request');
var asyncLib = require('async');
var fs = require('fs');
var Song = require('../models/song');

const ALBUMS = [
    'the_life_of_pablo',
	'the_college_dropout',
	'late_registration',
	'graduation',
	'808s',
	'my_beautiful_dark_twisted_fantasy',
	'yeezus'
];

exports.allAlbums = function () {
	return ALBUMS;
};
