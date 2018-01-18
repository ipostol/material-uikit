'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Histogram = require('./Histogram.scss');

var _Histogram2 = _interopRequireDefault(_Histogram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Histogram = function Histogram(_ref) {
  var histogram = _ref.histogram,
      rest = _objectWithoutProperties(_ref, ['histogram']);

  return _react2.default.createElement(
    'div',
    _extends({}, rest, { className: (0, _classnames2.default)(_Histogram2.default.histogram, rest.className) }),
    histogram.map(function (num, key) {
      return _react2.default.createElement('div', {
        className: _Histogram2.default.bar,
        style: { height: Math.round(num * 34 / 100) + 'px' },
        key: key
      });
    })
  );
};

Histogram.propTypes = {
  histogram: _propTypes2.default.array
};

exports.default = Histogram;