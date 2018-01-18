'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Status = require('./Status');

var _Status2 = _interopRequireDefault(_Status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%', marginLeft: '400px' } },
    _react2.default.createElement(_Status2.default, { status: 'pending' }),
    _react2.default.createElement(_Status2.default, { status: 'approved' }),
    _react2.default.createElement(_Status2.default, { status: 'rejected' })
  );
};