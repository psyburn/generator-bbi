'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ModelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the model subgenerator with the argument ' + this.name + '.');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

// ModelGenerator.prototype.files = function files() {
//   this.copy('somefile.js', 'somefile.js');
// };


ViewGenerator.prototype.createFiles = function createModelFiles() {
  var destFile = path.join('app/views', this.name + '.js');
  var jsName = this._.classify(this.name);
  var className = this.name.replace('/','-', 'gi');
  var template = [
    'define([',
    '  \'app\'',
    '],',
    'function(',
    '  app',
    ') {',
    '  \'use strict\';',
    '',
    '  var '+ jsName +'View = Backbone.View.extend({',
    '    className: \''+ className +'\'',,
    '    template: app.fetchTemplate(\''+ this.name +'\'),',
    '',
    '    events: {',
    '    },',
    '',
    '    render: function() {',
    '      this.$el.html(this.template());',
    '      return this;',
    '    },',
    '',
    '    cleanup: function() {',
    '      this.off();',
    '    }',
    '  });',
    '',
    '  return '+ jsName +'View;',
    '});'
  ].join('\n');

  this.write(destFile, template);
  this.write(path.join('app/templates', this.name +'.html'), '');
};
