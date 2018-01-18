'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Informer = require('./Informer');

var _Informer2 = _interopRequireDefault(_Informer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%', marginLeft: '400px' } },
    _react2.default.createElement(
      _Informer2.default,
      null,
      'Text'
    )
  );
};