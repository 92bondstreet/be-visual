/*eslint-disable quote-props */
'use strict';
module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      gruntfile: {
        src: ['Gruntfile.js']
      },
      js: {
        src: ['*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    mochacli: {
      options: {
        reporter: 'spec',
        bail: true
      },
      all: ['test/*.js']
    },
    watch: {
      gruntfile: {
        files: '<%= eslint.gruntfile.src %>',
        tasks: ['eslint:gruntfile']
      },
      js: {
        files: '<%= eslint.js.src %>',
        tasks: ['eslint:js', 'mochacli']
      },
      test: {
        files: '<%= eslint.test.src %>',
        tasks: ['eslint:test', 'mochacli']
      }
    }
  });

  grunt.registerTask('default', ['eslint', 'mochacli']);
};
