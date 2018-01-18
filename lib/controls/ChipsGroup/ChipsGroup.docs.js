'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChipsGroup = require('./ChipsGroup');

var _ChipsGroup2 = _interopRequireDefault(_ChipsGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  active: 'hourly',
  elements: [{ id: 'hourly', label: 'Hourly' }, { id: 'daily', label: 'Daily' }, { id: 'weekly', label: 'Weekly' }, { id: 'monthly', label: 'Monthly' }]
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%', marginLeft: '450px', marginTop: '50px' } },
    _react2.default.createElement(_ChipsGroup2.default, props)
  );
};