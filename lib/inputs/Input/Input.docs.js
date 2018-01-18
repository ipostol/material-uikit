'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputDocs = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _SearchSmall = require('../../icons/SearchSmall');

var _SearchSmall2 = _interopRequireDefault(_SearchSmall);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputDocs = exports.InputDocs = function InputDocs() {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Input2.default, { defaultValue: '10pm' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Input2.default, { defaultValue: 'with info', info: 'Amount of \xA3234 incl. VAT will be charged from card' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Input2.default, { defaultValue: '10pm', label: 'Label', optional: true })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Input2.default, { icon: _react2.default.createElement(_SearchSmall2.default, { style: { display: 'block' } }), defaultValue: '10pm' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Input2.default, { label: 'Label', error: 'some error', defaultValue: '10pm' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Input2.default, { defaultValue: '10pm', secondary: true, label: 'Label' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Input2.default, { defaultValue: '10pm', icon: _react2.default.createElement(_SearchSmall2.default, null), secondary: true, label: 'Label' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Input2.default, { defaultValue: '10pm', error: 'Some error', secondary: true, label: 'Label' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Input2.default, { disabled: true, secondary: true, defaultValue: '10pm' })
    )
  );
};

exports.default = InputDocs;