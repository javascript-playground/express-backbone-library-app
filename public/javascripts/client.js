var Book = Backbone.Model.extend({
  idAttribute: "_id"
});

var BookCollection = Backbone.Collection.extend({
  model: Book,
  url: "/books"
});

var BookView = Backbone.View.extend({
  tagName: "li",
  className: "book",
  render: function() {
    var template = $("#booktemplate").html();
    var compiled = Handlebars.compile(template);
    var html = compiled(this.model.attributes);
    this.$el.html(html);
    return this;
  }
});

var BookCollectionView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "add remove reset", this.render);
  },
  tagName: "ul",
  className: "books",
  render: function() {
    this.$el.html("");
    this.collection.each(function(book) {
      var bookView = new BookView({ model: book });
      this.$el.append(bookView.render().el);
    }, this);
    return this;
  }
});

var AppRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  index: function() {
    var collection = new BookCollection();
    collection.fetch();
    var view = new BookCollectionView({ collection: collection });
    $(".app").html(view.render().el);
  }
});
