'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var RouterGenerator = module.exports = function RouterGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the router subgenerator with the argument ' + this.name + '.');
};

util.inherits(RouterGenerator, yeoman.generators.NamedBase);

RouterGenerator.prototype.createRouterFiles = function createModelFiles() {
  var destFile = path.join('app/routers', this.name + '.js');
  var jsName = this._.classify(this.name);
  var template = [
    'define([',
    '  \'app\'',
    '],',
    'function (',
    '  app',
    ') {',
    '  \'use strict\';',
    '',
    '  var ' + jsName + 'Router = Backbone.Router.extend({',
    '    routes: {',
    '    },',
    '  });',
    '',
    '  return ' + jsName + 'Router;',
    '});'
  ].join('\n');

  this.write(destFile, template);
};