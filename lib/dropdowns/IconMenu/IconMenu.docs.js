'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconMenuDocs = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _More = require('./../../icons/More');

var _More2 = _interopRequireDefault(_More);

var _IconMenu = require('./IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{
  value: 'Option1'
}, {
  value: 'Option2'
}];

var IconMenuDocs = exports.IconMenuDocs = function IconMenuDocs() {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_IconMenu2.default, {
      options: options,
      onRight: true,
      icon: _react2.default.createElement(_More2.default, null)
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null)
  );
};

exports.default = IconMenuDocs;