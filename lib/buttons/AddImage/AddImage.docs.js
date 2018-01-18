'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _AddImage = require('./AddImage');

var _AddImage2 = _interopRequireDefault(_AddImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_AddImage2.default, { label: 'Add logo', size: 's', onButtonClick: function onButtonClick(e) {
        return e.preventDefault();
      } }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_AddImage2.default, { label: 'Add design', size: 'l' })
  );
};