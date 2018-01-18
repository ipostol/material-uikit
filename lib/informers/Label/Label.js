'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Label = require('./Label.scss');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Label = function Label(_ref) {
  var _cn;

  var children = _ref.children,
      isFocused = _ref.isFocused,
      isError = _ref.isError,
      optional = _ref.optional,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['children', 'isFocused', 'isError', 'optional', 'className']);

  return children ? _react2.default.createElement(
    'div',
    _extends({}, rest, {
      className: (0, _classnames2.default)(_Label2.default.label, (_cn = {}, _defineProperty(_cn, _Label2.default.focused, isFocused), _defineProperty(_cn, _Label2.default.error, isError), _cn), className)
    }),
    children,
    optional ? _react2.default.createElement(
      'span',
      { className: _Label2.default.optional },
      ' (Optional)'
    ) : ''
  ) : null;
};

exports.default = Label;