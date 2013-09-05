var Book = Backbone.Model.extend({
  idAttribute: "_id"
});

var BookCollection = Backbone.Collection.extend({
  model: Book,
  url: "/books"
});

var BookView = Backbone.View.extend({
  events: {
    "click .name": "singleBookLink"
  },
  tagName: "li",
  className: "book",
  render: function() {
    var template = $("#booktemplate").html();
    var compiled = Handlebars.compile(template);
    var html = compiled(this.model.attributes);
    this.$el.html(html);
    return this;
  },
  singleBookLink: function(e) {
    e.preventDefault();
    var id = this.model.get("_id");
    router.navigate("book/" + id, {trigger: true});
  }
});

var DetailedBookView = Backbone.View.extend({
  render: function() {
    var template = $("#detailedbooktemplate").html();
    var compiled = Handlebars.compile(template);
    var html = compiled(this.model.attributes);
    this.$el.html(html);
    return this;
  }
});

var BookCollectionView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "reset", this.render);
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
  initialize: function() {
    this._setupCollection();
  },
  routes: {
    "": "index",
    "book/:id": "singleBook"
  },
  _setupCollection: function() {
    if(this.collection) return;
    var data = $("#initialContent").html();
    this.collection = new BookCollection(JSON.parse(data));
  },
  _renderView: function(view) {
    $(".app").html(view.render().el);
  },
  index: function() {
    var view = new BookCollectionView({ collection: this.collection});
    this._renderView(view);
  },
  singleBook: function(id) {
    var book = this.collection.get(id);
    var view = new DetailedBookView({ model: book });
    this._renderView(view);
  }
});
