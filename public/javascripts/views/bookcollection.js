define(["backbone", "views/book"], function(Backbone, BookView) {
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

  return BookCollectionView;
});
