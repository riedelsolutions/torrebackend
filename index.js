var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/index.html', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});