var Item = Backbone.Model.extend({
  idAttribute: "_id"
});

var ItemCollection = Backbone.Collection.extend({
  model: Item,
  url: "/books"
});

// var ItemView = Backbone.View.extend({
//   tagName: "li",
//   render: function() {
//     var template = _.template($("#ItemViewTemplate").html());
//     this.$el.html(template(this.model.attributes));
//     return this;
//   }
// });
// 
// var ItemCollectionView = Backbone.View.extend({
//   tagName: "ul",
//   render: function() {
//     this.$el.html("");
//     this.collection.each(function(item) {
//       this.renderOne(item);
//     }, this);
//   },
//   renderOne: function(item) {
//     var newView = new ItemView({model: item});
//     this.$el.append(newView.render().$el);
//   }
// });
