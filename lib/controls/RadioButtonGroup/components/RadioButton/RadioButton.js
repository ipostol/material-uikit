'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RadioButton = require('./RadioButton.scss');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RadioButton = function RadioButton(_ref) {
  var label = _ref.label,
      isSelected = _ref.isSelected,
      rest = _objectWithoutProperties(_ref, ['label', 'isSelected']);

  return _react2.default.createElement(
    'div',
    _extends({ className: _RadioButton2.default.general }, rest),
    _react2.default.createElement('div', { className: (0, _classnames2.default)(_RadioButton2.default.circle, _defineProperty({}, _RadioButton2.default.checked, isSelected)) }),
    label && _react2.default.createElement(
      'div',
      { className: _RadioButton2.default.label },
      label
    )
  );
};

RadioButton.propTypes = {
  isSelected: _propTypes2.default.bool,
  label: _propTypes2.default.node
};

exports.default = RadioButton;