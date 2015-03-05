#!/usr/bin/env node
'use strict';
var meow = require('meow');
var beVisual = require('./index');

var cli = meow({
  'help': [
    'Usage',
    '  be-visual',
    '',
    'Example',
    '  be-visual'
  ].join('\n')
});

beVisual(cli.input[0]);
