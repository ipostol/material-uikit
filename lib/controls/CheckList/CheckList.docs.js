'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _CheckList = require('./CheckList');

var _CheckList2 = _interopRequireDefault(_CheckList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  options: [{ id: 1, value: 'Somegin 1' }, { id: 2, value: 'asdkjkasd 2' }, { id: 3, value: 'ajksdjalsd 3' }, { id: 1, value: 'Somegin 1' }, { id: 2, value: 'asdkjkasd 2' }, { id: 3, value: 'ajksdjalsd 3' }, { id: 1, value: 'Somegin 1' }, { id: 2, value: 'asdkjkasd 2' }, { id: 3, value: 'ajksdjalsd 3' }],
  value: [1, 2],
  onChange: function onChange(v) {
    return console.log(v);
  }
};

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_CheckList2.default, props)
  );
};