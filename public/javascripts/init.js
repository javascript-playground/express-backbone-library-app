$(function() {
  var collection = new BookCollection();
  collection.fetch({
    success: function(data) {
      var view = new BookCollectionView({ collection: data });
      console.log(view);
      $("body").append(view.render().el);
    }
  });
});
