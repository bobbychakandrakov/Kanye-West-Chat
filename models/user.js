var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  username: String,
  password: String,
  email: String,
  hash: String
});

module.exports = mongoose.model('User', User);