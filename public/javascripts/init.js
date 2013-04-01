$(function() {
  var items = new ItemCollection();
  items.fetch({
    success: function() {
      console.log(items);
    }
  });
});
