
/**
 * Module dependencies.
 */

var express = require('express')
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var dbUrl = "library";
var collections = ["books"];

var db = require("mongojs").connect(dbUrl, collections);

app.get('/', routes.index);
app.get('/books', function(req, res) {
  db.books.find({}, function(err, books) {
    if(err) return;
    var response = {
      books: books
    };
    res.json(response);
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
