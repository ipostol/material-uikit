'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' } },
    _react2.default.createElement(_NavLink2.default, { text: 'to=false' }),
    _react2.default.createElement(_NavLink2.default, { to: true, text: 'to=true' })
  );
};