'use strict';

var test = require('tape');
var numero = require('..');

test('aliases', function(t) {

  t.equal(numero.isInt, numero.isInteger);
  t.equal(numero.parseInt, numero.parseInteger);

  t.end();

});
