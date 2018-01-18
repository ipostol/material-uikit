'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _SearchMarker = require('./SearchMarker');

var _SearchMarker2 = _interopRequireDefault(_SearchMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(
      'div',
      { style: { position: 'relative' } },
      _react2.default.createElement(_SearchMarker2.default, null)
    )
  );
};