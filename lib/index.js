'use strict';

/**
 * BeVisual
 * Image size guidelines for some Social Network
 * @class BeVisual
 */

var size = require('../size');



/**
 * BeVisual Constructor
 *
 * @constructor BeVisual
 * @param {Array} networks list of social network
 * @param {Object} options
 * @param {Function} callback once Media Size loaded
 * @return {BeVisual} this
 */

var BeVisual = function(networks, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  this._options = options || {};
  this._size = this._options.size || size;
  this._callback = callback;

  return this;
};

/**
 * Exports
 */

module.exports = function(networks, options, callback) {
  var visual = new BeVisual(networks, options, callback);
  var cheatSheet = visual._filter(networks);
  visual._guidelines(cheatSheet);

  return visual;
};

/**
 * BeVisual prototype and properties
 */

var prototype = BeVisual.prototype;
prototype.constructor = BeVisual;
prototype.BeVisual = BeVisual;
prototype._size = {};
prototype._options = {};

/**
 * Create instance
 *
 * @method create
 * @param {Array} networks list of social network
 * @param {Object} options
 * @param {Function} callback once Media Size loaded
 * @return {BeVisual} this
 */

var create = function create(networks, options, callback) {
  return new BeVisual(networks, options, callback);
};

module.exports.create = create;

/**
 * Filter cheatSheet for given social network
 *
 * @method _filter
 * @param {Array} networks        list of social network
 * @return {Object} cheatSheet    JSON Object with expected size
 */

prototype._filter = function(networks) {
  var cheatSheet = {};
  var network = '';
  var key = '';

  for (var i = 0, length = networks.length; i < length; i++) {
    network = networks[i];
    key = network.toLowerCase();
    if (key in this._size) {
      cheatSheet[network] = this._size[key];
    }
  }

  return cheatSheet;
};

/**
 * Cheat sheet for Media size
 *
 * @method _guidelines
 * @param {Object} cheatSheet
 * @return {BeVisual} this
 */

prototype._guidelines = function(cheatSheet) {
  this._callback && this._callback(null, cheatSheet);
  return this;
};
