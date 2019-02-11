var express = require('express');
//var cors = require('cors');
var app = express();
//var request = require('request');


//app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://torre.bio/api");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(
  express.static(__dirname + '/public')
  );

app.get('/index.html', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/', function(req, res, next) {
  res.redirect('/index.html');
});

app.post('/', function(req, res, next) {
 res.redirect('/index.html');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});