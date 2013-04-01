var db = require("../database.js");

exports.books = {};

/*
 * GET all books
 */
exports.books.all = function(req, res) {
  db.books.find(function(err, books) {
    if(err) return;
    res.json(books);
  });
};

/*
 * GET one book
 */
exports.books.one = function(req, res) {
  db.books.findOne({ "_id" : db.ObjectId(req.params.id) }, function(err, book) {
    if(err) return;
    res.json(book);
  });
};

exports.books.create = function(req, res) {
  res.json(req.body);
  db.books.save(req.body);
};
