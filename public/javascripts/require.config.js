require.config({
  baseUrl: '/javascripts',
  paths: {
    jquery: 'lib/jquery',
    backbone: 'lib/backbone',
    underscore: 'lib/underscore',
    handlebars: 'lib/handlebars'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  }
});

require(["init"]);
