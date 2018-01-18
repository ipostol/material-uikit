'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var normalizeTime = function normalizeTime(value, prevValue) {

  if (value === '') return '';

  if (!/^[0-9:]+$/.test(value) || value.length > 5) return prevValue;

  var backspace = false;

  if (prevValue.length > value.length) {

    backspace = true;
  }

  if (backspace) {

    return value;
  }

  if (value === '24') return '24:00';

  if (value.split(':').length - 1 >= 2) return prevValue;

  if (parseInt(value.split(':')[0], 10) > 24 && value.length === 2) {

    if (value[1] <= 5) {

      return value[0] + ':' + value[1];
    }

    return value[0] + ':59';
  }

  if (value.length >= 2 && !value.includes(':')) {

    return value + ':';
  }

  if (value.split(':')[1] && (value.split(':')[1] > 59 || value.split(':')[1][0] >= 6)) {

    return value.split(':')[0] + ':59';
  }

  return value;
};

var TimeInput = function TimeInput(_ref) {
  var _onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['onChange']);

  return _react2.default.createElement(_Input2.default, _extends({
    onChange: function onChange(e) {
      return _onChange(normalizeTime(e.target.value, rest.value));
    }
  }, rest));
};

TimeInput.defaultProps = {
  onChange: function onChange() {}
};

exports.default = TimeInput;