'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownDocs = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _Option = require('../Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{
  id: 1,
  value: 'Option with value1'
}, {
  id: 2,
  value: 'Option with value2',
  icon: _react2.default.createElement('div', { style: { width: 16, height: 16, background: 'red' } })
}];

var DropdownDocs = exports.DropdownDocs = function DropdownDocs() {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_Select2.default, {
      options: options,
      placeholder: 'Select some val',
      value: 1,
      onChange: function onChange(id) {
        return console.log('change', id);
      }
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { style: { width: '200px' } },
      _react2.default.createElement(_Select2.default, {
        error: 'Some error',
        label: 'Sector',
        options: options,
        placeholder: 'Select some val',
        onChange: function onChange(id) {
          return console.log('change', id);
        }
      })
    )
  );
};

exports.default = DropdownDocs;