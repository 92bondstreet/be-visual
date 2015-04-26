/*eslint-disable quote-props, camelcase  */
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
    },
    mocha_istanbul: {
      coverage: {
        src: 'test',
        options: {
          mask: '*.js',
          check: {
              lines: 75,
              statements: 75,
              functions: 75
          },
          reportFormats: ['html']
        }
      }
    }
  });

  grunt.registerTask('default', ['eslint', 'mochacli']);
  grunt.registerTask('test', ['mochacli']);
  grunt.registerTask('coverage', ['mocha_istanbul']);
};
