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

var BeVisual = module.exports = function(networks, options, callback) {
  if (!(this instanceof BeVisual)) {
    return new BeVisual(networks, options, callback);
  }

  if (typeof options === 'function'){
    callback = options;
    options = {};
  }

  this._options = options || {};
  this._size = this._options.size || size;

  return this;
};




/**
 * BeVisual prototype and properties
 */

var prototype = BeVisual.prototype;
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


 /**
  * Get size for given social network
  *
  * @method _getSize
  * @param {Array} networks list of social network
  * @return {Object} sizes   JSON Object with expected size
  */

/**
 * Parse networks
 *
 * @method _parse
 * @param {Object} size
 * @param {Function} callback once Media Size loaded
 * @return {BeVisual} this
 */
