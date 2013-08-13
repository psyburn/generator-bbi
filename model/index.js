'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.createFiles = function createModelFiles() {
  var modelDestFile = path.join('app/models', this.name + '.js');
  var jsName = this._.classify(this.name);
  var template = [
    'define(',
    '  function () {',
    '    \'use strict\';',
    '',
    '    var ' + jsName + 'Model = Backbone.Model.extend({',
    '      defaults: {',
    '      }',
    '    });',
    '',
    '    return ' + jsName + 'Model;',
    '});'
  ].join('\n');

  this.write(modelDestFile, template);
};