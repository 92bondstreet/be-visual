'use strict';

var prettyjson = require('prettyjson');
var size = require('../size');

var options = {
  noColor: false
};


module.exports = function () {
  console.log(prettyjson.render(size, options));
};
