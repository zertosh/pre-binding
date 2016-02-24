'use strict';

var binary = require('node-pre-gyp');
var preBinding = require('../');
var test = require('tap').test;

test('pre-binding', function(t) {
  t.plan(1);
  t.equal(
    preBinding.find(require.resolve('./app/package.json')),
    binary.find(require.resolve('./app/package.json'))
  );
});
