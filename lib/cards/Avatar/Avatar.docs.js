'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    {
      style: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
      }
    },
    _react2.default.createElement(_Avatar2.default, { count: 2 }),
    _react2.default.createElement(_Avatar2.default, { name: 'James Bond' }),
    _react2.default.createElement(_Avatar2.default, { name: 'James Bond', image: 'IMG_23082017_151643_0_wox5ko' })
  );
};