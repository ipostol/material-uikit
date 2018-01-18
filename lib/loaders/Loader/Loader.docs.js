'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' } },
    _react2.default.createElement(_Loader2.default, { status: 'loading' }),
    _react2.default.createElement(_Loader2.default, { status: 'success' }),
    _react2.default.createElement(_Loader2.default, { status: 'error' }),
    _react2.default.createElement(_Loader2.default, { status: 'error', message: 'Right', right: true }),
    _react2.default.createElement(_Loader2.default, { status: 'error', message: 'Left' })
  );
};