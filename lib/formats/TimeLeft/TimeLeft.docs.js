'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _TimeLeft = require('./TimeLeft');

var _TimeLeft2 = _interopRequireDefault(_TimeLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var date = new Date().getTime() + 3000;

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_TimeLeft2.default, { date: date, format: 'simple' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TimeLeft2.default, { date: date, format: 'short' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TimeLeft2.default, { date: date, format: 'long', finish: function finish() {
        return console.log('finish');
      } })
  );
};