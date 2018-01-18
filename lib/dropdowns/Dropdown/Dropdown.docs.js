'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownDocs = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Option = require('../Option');

var _Option2 = _interopRequireDefault(_Option);

var _Input = require('../../inputs/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownDocs = exports.DropdownDocs = function DropdownDocs() {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(
      _Dropdown2.default,
      {
        trigger: 'Open',
        contentWidth: '100px',
        onRight: true
      },
      _react2.default.createElement(
        _Option2.default,
        null,
        'Option1'
      ),
      _react2.default.createElement(
        _Option2.default,
        null,
        'Option2'
      ),
      _react2.default.createElement(
        _Option2.default,
        null,
        'Option3'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Dropdown2.default,
      {
        trigger: 'Open right',
        contentWidth: '300px',
        onRight: true
      },
      _react2.default.createElement(
        _Option2.default,
        { disabled: true },
        'Test Option1'
      ),
      _react2.default.createElement(
        _Option2.default,
        null,
        'Test Option2'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Dropdown2.default,
      {
        trigger: 'Open top',
        contentWidth: '300px',
        onTop: true
      },
      _react2.default.createElement(
        _Option2.default,
        { disabled: true },
        'Test Option1'
      ),
      _react2.default.createElement(
        _Option2.default,
        null,
        'Test Option2'
      )
    )
  );
};

exports.default = DropdownDocs;