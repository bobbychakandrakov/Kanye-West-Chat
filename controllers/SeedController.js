var Album = require('../models/album');
var request = require('request');
var asyncLib = require('async');
var fs = require('fs');
var Song = require('../models/song');
var AlbumsController = require('./AlbumsController');
exports.seedDatabase = function () {
    // Check if the database is already full
    Album.find({}, function (err, albums){
        if(err){
            console.error('Error:', err);
        }else{
            if (albums.length == 0){
                var ALBUMS = AlbumsController.allAlbums();
                var albums = [];
                var songsForAlbum = [];
                var songs = [];
                for(var i = 0; i < ALBUMS.length - 1; i++){
                    var album = JSON.parse(fs.readFileSync('./albums/' + ALBUMS[i] + '.json', 'utf8')).result;
                    for(var j =0; j < album.length - 1; j++){
                        songsForAlbum.push(album[j]);
                    }
                    songs = songs.concat(songsForAlbum);
                    albums.push(
                        {
                            title:ALBUMS[i],
                            songs:songsForAlbum
                        }
                    );
                    songsForAlbum = [];
                }
                Song.insertMany(songs, function(err, docs){
                    if(err){
                        console.error('Error:', err);
                    }else{
                        Album.insertMany(albums,function(err, docs){
                            if(err){
                                console.error('Error:', err);
                            }else{
                                console.log('DB seeded!');
                            }
                        });
                    }
                });
            }
        }
    });
};