'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(
      _Tooltip2.default,
      {
        placement: 'rightTop',
        overlayClassName: 'some',
        trigger: 'click',
        animation: 'zoom',
        align: { offset: [8, -22] },
        overlay: _react2.default.createElement(
          'div',
          {
            style: {
              width: 300,
              height: 300,
              background: 'red'
            }
          },
          '123'
        )
      },
      _react2.default.createElement(
        'span',
        null,
        'Something text'
      )
    )
  );
};