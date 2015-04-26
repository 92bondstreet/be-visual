/*global describe, it */
/*eslint max-nested-callbacks:0 */

'use strict';
var assert = require('assert');
// We use create to expose the constructor
var visual = require('../index');

describe('be-visual node module', function () {

  describe('.create()', function(){
    it('should return a BeVisual instance', function () {
      var instance = visual.create();
      assert.equal(instance instanceof instance.BeVisual, true, 'create BeVisual instance');
    });
  });

  describe('_filter()', function(){
    before(function(){
      visual = visual.create();
    });

    describe('with available network', function(){
      var networks = ['Facebook', 'Youtube'];

      it('should return the same size object', function () {
        var cheatSheet = visual._filter(networks);
        assert.equal(Object.keys(cheatSheet).length, networks.length, 'The cheat sheet is consistency');
      });
      it('should return the object', function () {
        var cheatSheet = visual._filter(networks);
        assert.ok(cheatSheet[networks[0]], 'The Cheat Sheet contains ' + networks[0] );
        assert.ok(cheatSheet[networks[1]], 'The Cheat Sheet contains ' + networks[1] );
      });
    });

    describe('with not available network', function(){
      var networks = ['Sina', 'myNetwork'];

      it('should return an empty object', function () {
        var cheatSheet = visual._filter(networks);
        assert.deepEqual(cheatSheet, {}, 'The cheat sheet is empty');
      });
    });
  });

  describe('_guidelines(cheatSheet, callback)', function(){
    it('should call the callback with the cheatsheet argument', function (done) {
      visual._guidelines({}, done);
    });
  });

  describe('_guidelines(cheatSheet)', function(){
    it('should call the callback with the cheatsheet argument', function (done) {
      visual._callback = done;
      visual._guidelines({});
    });
  });

});
