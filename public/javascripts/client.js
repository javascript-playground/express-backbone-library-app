var Book = Backbone.Model.extend({
  idAttribute: "_id"
});

var BookCollection = Backbone.Collection.extend({
  model: Book,
  url: "/books"
});
