'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_DatePicker2.default, { value: new Date() }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_DatePicker2.default, {
      isRequired: true,
      isRange: true,
      disabledDays: { after: new Date() },
      initialMonth: new Date(new Date().getYear(), new Date().getMonth() - 1),
      value: [new Date(), new Date().getTime() + 12 * 24 * 60 * 60 * 1000]
    })
  );
};