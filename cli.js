#!/usr/bin/env node
'use strict';
var meow = require('meow');
var beVisual = require('./index');
var stdout = require('./lib/stdout');

var cli = meow({
  'help': [
    'Usage',
    '  be-visual <input>',
    '',
    'Example',
    '  be-visual Facebook Twitter',
    '  be-visual'
  ].join('\n')
});

beVisual(cli.input, stdout);
