// Define schema
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Urlschema = new Schema({
  url: String,
  shortenUrl:String
});

// Compile model from schema

module.exports = mongoose.model('Url', Urlschema );
