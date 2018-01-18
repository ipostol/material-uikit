'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Preview,
    null,
    _react2.default.createElement(_Pagination2.default, { active: 1, length: 150, perPage: 10, onChange: function onChange(p) {
        return console.log(p);
      } })
  );
};