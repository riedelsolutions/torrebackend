var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(
  express.static(__dirname + '/public')
  );






app.get('/index.html', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
  res.redirect('/index.html');
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
 res.redirect('/index.html');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});