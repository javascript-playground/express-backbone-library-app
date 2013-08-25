var db = require("../database.js");

exports.index = function(req, res) {
  res.render("index");
};
exports.books = {};

exports.books.all = function(req, res) {
  db.books.find(function(err, books) {
    if(err) return;
    res.json(books);
  });
};

exports.books.one = function(req, res) {
  var bookId = db.ObjectId(req.params.id);
  db.books.findOne({ "_id" : bookId }, function(err, book) {
    if(err) return;
    res.json(book);
  });
};

exports.books.create = function(req, res) {
  res.json(req.body);
  db.books.save(req.body);
};

