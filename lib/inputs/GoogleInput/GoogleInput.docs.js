'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _GoogleInput = require('./GoogleInput');

var _GoogleInput2 = _interopRequireDefault(_GoogleInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_GoogleInput2.default, {
      onLocationChange: function onLocationChange(l) {
        return console.log(l);
      },
      placeholder: 'Enter something...'
    })
  );
};