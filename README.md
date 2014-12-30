# Numero.js [![npm Version](http://img.shields.io/npm/v/numero.svg?style=flat)](https://www.npmjs.org/package/numero) [![Build Status](https://img.shields.io/travis/yuanqing/numero.svg?style=flat)](https://travis-ci.org/yuanqing/numero) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/numero.svg?style=flat)](https://coveralls.io/r/yuanqing/numero)

> A stricter `parseInt` and `parseFloat`.

## API

```js
numero.parseInt(42);      // 42
numero.parseInt('42');    // 42
numero.parseInt('42 ');   // 42
numero.parseInt(3.14);    // null
numero.parseInt('3.14');  // null
numero.parseInt(' 3.14'); // null

numero.parseFloat(42);      // 42
numero.parseFloat('42');    // 42
numero.parseFloat('42 ');   // 42
numero.parseFloat(3.14);    // 3.14
numero.parseFloat('3.14');  // 3.14
numero.parseFloat(' 3.14'); // 3.14
```

1. `null` is returned if `x` cannot be parsed to an integer/float.

2. An integer is also a float.

3. `x` can have trailing/leading whitespace.

Numero is stricter than your native `parseInt` and `parseFloat` in that extraneous characters are not allowed. For example:

```js
parseInt('42foo', 10);    // 42
numero.parseInt('42foo'); // null

parseFloat('3.14foo');        // 3.14
numero.parseFloat('3.14foo'); // null
```

Numero can also handle octal and hexadecimal representations, and negative numbers too:

```js
numero.parseInt('052');     //  42
numero.parseFloat('-0x2a'); // -42
```

[There are lots of tests.](https://github.com/yuanqing/numero/blob/master/test)

### numero.isInt(x)

Returns `true` if `x` can be parsed to an integer.

### numero.parseInt(x)

Returns an integer, or `null` if `x` cannot be parsed to an integer.

### numero.isFloat(x)

Returns `true` if `x` can be parsed to a float.

### numero.parseFloat(x)

Returns a float, or `null` if `x` cannot be parsed to a float.

## Installation

Install via [npm](https://www.npmjs.org/):

```bash
$ npm i --save numero
```

## Changelog

- 0.1.0
  - Initial release

## License

[MIT license](https://github.com/yuanqing/numero/blob/master/LICENSE)