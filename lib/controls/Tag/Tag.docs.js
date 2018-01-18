'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tag = require('./Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%', margin: '100px 0 0 300px' } },
    _react2.default.createElement(_Tag2.default, { label: 'London' }),
    _react2.default.createElement(_Tag2.default, { label: 'London' }),
    _react2.default.createElement(_Tag2.default, { label: 'London' })
  );
};