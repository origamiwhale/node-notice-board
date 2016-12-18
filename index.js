var express = require('express');
var path = require('path');
var app = express();

app.listen(8080, function(){
	console.log("Notice Board App started and listening on port 8080");
})

app.get('/', function(req, res){
	res.send("Index - Hello world!");
})

app.get('/board', function(req, res){
	res.send("Board View");
})