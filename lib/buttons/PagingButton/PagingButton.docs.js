'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PagingButton = require('./PagingButton');

var _PagingButton2 = _interopRequireDefault(_PagingButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' } },
    _react2.default.createElement(_PagingButton2.default, { page: 3 }),
    _react2.default.createElement(_PagingButton2.default, { page: 1, active: true }),
    _react2.default.createElement(_PagingButton2.default, { left: true }),
    _react2.default.createElement(_PagingButton2.default, { right: true })
  );
};