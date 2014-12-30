var test = require('tape');
var fn = require('..').parseInt;

test('parseInt', function(t) {

  // undefined
  t.equals(fn(undefined), null, 'undefined');

  // null
  t.equals(fn(null), null, 'null');

  // boolean
  t.equals(fn(true), null, 'true');
  t.equals(fn(false), null, 'false');

  // numbers
  t.equals(fn(0), 0, 'number 0');
  t.equals(fn(1), 1, 'number 1');
  t.equals(fn(-1), -1, 'number -1');
  t.equals(fn(42), 42, 'number decimal');
  t.equals(fn(-42), -42, 'number negative decimal');
  t.equals(fn(052), 42, 'number octal');
  t.equals(fn(-052), -42, 'number negative octal');
  t.equals(fn(0x2a), 42, 'number hex');
  t.equals(fn(-0x2a), -42, 'number negative hex');
  t.equals(fn(3.14), null, 'number float');
  t.equals(fn(-3.14), null, 'number negative float');
  t.equals(fn(3e14), 3e14, 'number exponent');
  t.equals(fn(-3e14), -3e14, 'number negative exponent');
  t.equals(fn(Number.MIN_VALUE), null, 'Number.MIN_VALUE');
  t.equals(fn(Number.MAX_VALUE), Number.MAX_VALUE, 'Number.MAX_VALUE');

  // infinity
  t.equals(fn(Infinity), null, 'infinity');
  t.equals(fn(-Infinity), null, 'negative infinity');

  // NaN
  t.equals(fn(NaN), null, 'NaN');

  // string
  t.equals(fn(''), null, 'string empty');
  t.equals(fn(' '), null, 'string whitespace');
  t.equals(fn('\n'), null, 'string whitespace');
  t.equals(fn('foo'), null, 'string word');
  t.equals(fn('-'), null, 'string hyphen');
  t.equals(fn('19.01.2038'), null, 'string date');
  t.equals(fn('1-10'), null, 'string, range');
  t.equals(fn('undefined'), null, 'string undefined');
  t.equals(fn('null'), null, 'string null');
  t.equals(fn('true'), null, 'string true');
  t.equals(fn('false'), null, 'string false');
  t.equals(fn('0'), 0, 'string 0');
  t.equals(fn('1'), 1, 'string 1');
  t.equals(fn('-1'), -1, 'string -1');
  t.equals(fn('42'), 42, 'string decimal');
  t.equals(fn('42.'), 42, 'string decimal, trailing "."');
  t.equals(fn('-42'), -42, 'string negative decimal');
  t.equals(fn('052'), 42, 'string octal');
  t.equals(fn('-052'), -42, 'string negative octal');
  t.equals(fn('0x2a'), 42, 'string hex');
  t.equals(fn('-0x2a'), -42, 'string negative hex');
  t.equals(fn('3.14'), null, 'string float');
  t.equals(fn('.314'), null, 'string float, leading "."');
  t.equals(fn('-3.14'), null, 'string negative float');
  t.equals(fn('3e14'), 3e14, 'string exponent');
  t.equals(fn('-3e14'), -3e14, 'string negative exponent');
  t.equals(fn('Infinity'), null, 'string infinity');
  t.equals(fn('-Infinity'), null, 'string negative infinity');
  t.equals(fn('NaN'), null, 'string NaN');
  t.equals(fn(' 42 '), 42, 'number with whitespace');
  t.equals(fn('42 42'), null, 'two numbers');
  t.equals(fn('3.foo'), null, 'invalid float');
  t.equals(fn('.3foo'), null, 'invalid float');
  t.equals(fn('foo.14'), null, 'invalid float');
  t.equals(fn('foo14.'), null, 'invalid float');
  t.equals(fn('42foo'), null, 'invalid decimal');
  t.equals(fn('foo42'), null, 'invalid decimal');
  t.equals(fn('0foo'), null, 'invalid octal');
  t.equals(fn('-0foo'), null, 'invalid negative octal');
  t.equals(fn('0x'), null, 'invalid hex');
  t.equals(fn('0xfoo2a'), null, 'invalid hex');
  t.equals(fn('0x2afoo'), null, 'invalid hex');
  t.equals(fn('-0x'), null, 'invalid negative hex');
  t.equals(fn('-0xfoo2a'), null, 'invalid negative hex');
  t.equals(fn('-0x2afoo'), null, 'invalid negative hex');

  // plain object
  t.equals(fn({ foo: 'bar' }), null, 'plain object non-empty');
  t.equals(fn({}), null, 'plain object empty');
  t.equals(fn(Object.create({})), null, 'plain object empty');

  // built-in object
  t.equals(fn(Object.create(Date)), null, 'object inherited');
  t.equals(fn(new Date()), null, 'object, new Date');
  t.equals(fn(new Boolean(true)), null, 'object, new Boolean');
  t.equals(fn(new Number(42)), null, 'object, new Number');
  t.equals(fn(new String('foo')), null, 'object, new String');

  // array
  t.equals(fn([]), null, 'array, empty');
  t.equals(fn(['foo']), null, 'array, non-empty');

  // function
  t.equals(fn(function() {}), null, 'function, new');
  t.equals(fn(Date), null, 'function, built-in');

  t.end();

});
