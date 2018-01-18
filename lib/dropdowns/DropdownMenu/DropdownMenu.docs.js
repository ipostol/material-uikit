'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMenuDocs = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _DropdownGray = require('./../../icons/DropdownGray');

var _DropdownGray2 = _interopRequireDefault(_DropdownGray);

var _DropdownFilled = require('../../icons/DropdownFilled');

var _DropdownFilled2 = _interopRequireDefault(_DropdownFilled);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownMenu3 = require('./DropdownMenu.scss');

var _DropdownMenu4 = _interopRequireDefault(_DropdownMenu3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{
  id: 1,
  value: 'Active'
}, {
  id: 2,
  value: 'Recent'
}];

var DropdownMenuDocs = exports.DropdownMenuDocs = function DropdownMenuDocs() {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_DropdownMenu2.default, {
      options: options,
      value: 1,
      onChange: function onChange(id) {
        return console.log('change', id);
      },
      icon: _react2.default.createElement(_DropdownGray2.default, null)
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_DropdownMenu2.default, {
      options: options,
      value: 2,
      onChange: function onChange(id) {
        return console.log('change', id);
      },
      icon: _react2.default.createElement(_DropdownFilled2.default, null),
      className: _DropdownMenu4.default.fontLight
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_DropdownMenu2.default, {
      options: options,
      value: 2,
      onChange: function onChange(id) {
        return console.log('change', id);
      },
      icon: _react2.default.createElement(_DropdownFilled2.default, null),
      className: _DropdownMenu4.default.fontLight,
      prefix: 'Sort by:'
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null)
  );
};

exports.default = DropdownMenuDocs;