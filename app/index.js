'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BbiGenerator = module.exports = function BbiGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BbiGenerator, yeoman.generators.Base);

BbiGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  // console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'nothinOption',
    message: 'Nothing to see here - move along.',
    default: true
  }];


  this.prompt(prompts, function (props) {
    this.nothinOption = props.nothinOption;

    // cb();
  }.bind(this));
};

BbiGenerator.prototype.app = function app() {
  // this.mkdir('app');
  // this.mkdir('app/templates');

  // this.copy('_package.json', 'package.json');
  // this.copy('_bower.json', 'bower.json');
};

BbiGenerator.prototype.projectfiles = function projectfiles() {
  // this.copy('editorconfig', '.editorconfig');
  // this.copy('jshintrc', '.jshintrc');
};
