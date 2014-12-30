'use strict';

var test = require('tape');
var fn = require('..').isInt;

test('isInt', function(t) {

  t.ok(fn('42'));
  t.notOk(fn('3.14'));
  t.notOk(fn('foo'));

  t.end();

});
