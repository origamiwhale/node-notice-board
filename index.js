var express = require('express');
var path = require('path');
var app = express();

var resetDb = require('./db-logic/resetDb.js');
var dbSession = require("./db-logic/dbSession.js");
var getNotices = require("./db-logic/getNotices.js");
var getUsers = require("./db-logic/getUsers.js");

app.listen(8080, function(){
	console.log("Notice Board App started and listening on port 8080");
})

resetDb(dbSession);

app.get('/', function(req, res){
	console.log("GET call to /");
	res.send("Index - Hello world!");
})

app.get('/board', function(req, res){
	console.log("GET call to /board");
	res.send("Board View");
})

app.get('/api/notices/', function(req, res){
	console.log("GET call to /api/notices");
	getNotices(dbSession, res);
})

app.get('/api/users/', function(req, res){
	console.log("GET call to /api/users");
	getUsers(dbSession, res);
})