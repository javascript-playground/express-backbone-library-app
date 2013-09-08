define(["underscore", "backbone"], function(_, Backbone) {
  var o = {};
  _.extend(o, Backbone.Events);
  return o;
});
