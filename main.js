var express       = require('express');

var app = express.createServer();


app.use(express.static(__dirname + '/public'));

//just a test

module.exports.app = app;
