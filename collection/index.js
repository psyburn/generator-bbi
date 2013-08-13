'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var CollectionGenerator = module.exports = function ModelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

CollectionGenerator.prototype.createFiles = function createModelFiles() {
  var collectionDestFile = path.join('app/collections', this.name + '.js');
  var jsName = this._.classify(this.name);
  var template = [
    'define(',
    '  function () {',
    '    \'use strict\';',
    '',
    '    var ' + jsName + 'Collection = Backbone.Collection.extend({',
    '    });',
    '',
    '    return ' + jsName + 'Collection;',
    '});'
  ].join('\n');

  this.write(collectionDestFile, template);
};