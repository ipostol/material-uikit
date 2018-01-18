'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownFilterDocs = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _DropdownFilter = require('./DropdownFilter');

var _DropdownFilter2 = _interopRequireDefault(_DropdownFilter);

var _More = require('../../icons/More');

var _More2 = _interopRequireDefault(_More);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{
  id: 1,
  label: 'Active',
  checked: true
}, {
  separator: true
}, {
  id: 2,
  label: 'Recent',
  checked: true
}];

var DropdownFilterDocs = exports.DropdownFilterDocs = function DropdownFilterDocs() {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_DropdownFilter2.default, {
      options: options,
      value: 1,
      onChange: function onChange(id, status) {
        return console.log('change', id, status);
      }
    }),
    _react2.default.createElement(_DropdownFilter2.default, {
      options: options,
      trigger: _react2.default.createElement(_More2.default, null),
      contentWidth: 200,
      onRight: true,
      value: 1,
      onChange: function onChange(id, status) {
        return console.log('change', id, status);
      }
    })
  );
};

exports.default = DropdownFilterDocs;