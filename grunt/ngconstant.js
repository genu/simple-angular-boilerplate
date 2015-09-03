module.exports = function(grunt) {
  return {
    options: {
      space: '  ',
      wrap: '"use strict";\n\n {%= __ngModule %}',
      name: 'app.environment',
      dest: '<%= src %>/js/environment.js',
      constants: {
        PACKAGE: grunt.file.readJSON('bower.json')
      }
    },
    development: {
      constants: {
        ENV: grunt.file.readYAML('environments.yaml')['development']
      }
    },
    production: {
      constants: {
        ENV: grunt.file.readYAML('environments.yaml')['production']
      }
    }
  }
};
