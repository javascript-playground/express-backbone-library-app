define(["backbone", "handlebars", "jquery", "events"], function(Backbone, Handlebars, $, Events) {
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
      var url = "book/" + id;
      Events.trigger("router:navigate", url);
    }
  });

  return BookView;
});
