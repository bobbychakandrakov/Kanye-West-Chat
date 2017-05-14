var express = require('express');
var router = express.Router();

var AlbumsController = require('../controllers/AlbumsController');

router.get('/:name', AlbumsController.getAlbumByName);
router.get('/songs/:name', AlbumsController.getAlbumSongs)

module.exports = router;