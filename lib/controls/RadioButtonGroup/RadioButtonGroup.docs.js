'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _RadioButtonGroup = require('./RadioButtonGroup');

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  active: 'male',
  options: [{ id: 'both', name: 'Any' }, { id: 'male', name: 'Male' }, { id: 'female', name: 'Female' }],
  onChange: function onChange(active) {
    return console.log(active);
  }
};

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_RadioButtonGroup2.default, props)
  );
};