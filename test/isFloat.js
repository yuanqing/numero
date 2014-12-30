'use strict';

var test = require('tape');
var fn = require('..').isFloat;

test('isFloat', function(t) {

  t.ok(fn('42'));
  t.ok(fn('3.14'));
  t.notOk(fn('foo'));

  t.end();

});
