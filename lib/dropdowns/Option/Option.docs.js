'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    { style: { backgroundColor: '#ffffff' } },
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Option2.default,
        { disabled: true },
        'Test Label disabled'
      ),
      _react2.default.createElement(
        _Option2.default,
        null,
        'Test Label'
      )
    )
  );
};