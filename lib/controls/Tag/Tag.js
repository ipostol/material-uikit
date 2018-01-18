'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CloseModal = require('../../icons/CloseModal');

var _CloseModal2 = _interopRequireDefault(_CloseModal);

var _Tag = require('./Tag.scss');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Tag = function Tag(_ref) {
  var label = _ref.label,
      className = _ref.className,
      onRemove = _ref.onRemove,
      rest = _objectWithoutProperties(_ref, ['label', 'className', 'onRemove']);

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(_Tag2.default.container, className) }, rest),
    label,
    _react2.default.createElement(_CloseModal2.default, { onClick: onRemove, className: _Tag2.default.icon })
  );
};

exports.default = Tag;