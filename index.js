'use strict';

var _parseFloat = (function() {

  var memo = {};

  return function(x) {

    var type = typeof x;

    if (type != 'string') {
      // check that `x` is a number type
      if (type == 'number' && isFinite(x)) {
        return x;
      }
      return null;
    }

    // lookup `x` in `memo`
    if (x in memo) {
      return memo[x];
    }

    // normalise `x`
    var str = x.trim().toLowerCase();

    // check if `x` has a minus sign
    var sign = 1;
    if (str[0] == '-') {
      sign = -1;
      str = str.slice(1);
    }

    // parse `x` into a number
    var parsed;
    if (str.indexOf('0x') == 0) { // hexadecimal
      parsed = parseInt(str.slice(2), 16);
    } else if (str[0] === '0' && str.length > 1) { // octal
      parsed = parseInt(str.slice(1), 8);
    } else { // decimal or float
      parsed = parseFloat(str);
    }

    if (parsed == parsed && isFinite(str)) {
      parsed = sign * parsed;
      memo[x] = parsed; // save result to `memo`
      return parsed;
    }
    return null;

  };

})();

var isFloat = function(x) {
  return _parseFloat(x) !== null;
};

var _parseInt = function(x) {

  var parsed = _parseFloat(x);

  if (parsed !== null && parsed % 1 == 0) {
    return parsed;
  }
  return null;

};

var isInt = function(x) {
  return _parseInt(x) !== null;
};

module.exports = {

  isFloat: isFloat,
  parseFloat: _parseFloat,
  isInt: isInt,
  isInteger: isInt,
  parseInt: _parseInt,
  parseInteger: _parseInt

};
