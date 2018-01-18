'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var normalizeNumber = function normalizeNumber(value) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e+10;


  var number = (0, _numeral2.default)(value).value();

  if (number === null) return null;

  if (number > max) return max;

  return Math.abs(number);
};

var normalizePrice = function normalizePrice(value) {

  if (value || value === 0) {

    return '\xA3' + (0, _numeral2.default)(value).format('0,0');
  }

  return '';
};

var PriceInput = function PriceInput(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      _onBlur = _ref.onBlur,
      rest = _objectWithoutProperties(_ref, ['value', 'onChange', 'onBlur']);

  return _react2.default.createElement(_Input2.default, _extends({
    value: normalizePrice(value),
    onChange: function onChange(e) {
      return _onChange(normalizeNumber(e.target.value));
    },
    onBlur: function onBlur(e) {
      return _onBlur(normalizeNumber(e.target.value));
    }
  }, rest));
};

PriceInput.defaultProps = {
  onBlur: function onBlur() {},
  onChange: function onChange() {}
};

exports.default = PriceInput;