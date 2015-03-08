'use strict';

var prettyjson = require('prettyjson');

var options = {
  'noColor': false
};

/**
 * Stdout printer
 *
 * @method printer
 * @param {Object} err    Callback error
 * @param {Object} size   List of media size
 */

var printer = function printer(err, size){
  if (err) {
    console.log(err);
  }

  console.log(prettyjson.render(size, options));
};

module.exports = printer;
