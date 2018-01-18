'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Option = require('./Option.scss');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Option = function Option(_ref) {
  var Element = _ref.element,
      children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      icon = _ref.icon,
      iconClass = _ref.iconClass,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ['element', 'children', 'className', 'size', 'icon', 'iconClass', 'disabled']);

  return _react2.default.createElement(
    Element,
    _extends({
      className: (0, _classnames2.default)(_Option2.default.general, className, _Option2.default[size], _defineProperty({}, _Option2.default.disabled, disabled))
    }, rest),
    icon && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_Option2.default.icon, iconClass) },
      icon
    ),
    icon ? _react2.default.createElement(
      'span',
      null,
      children
    ) : children
  );
};

Option.propTypes = {
  children: _propTypes2.default.node,
  element: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  icon: _propTypes2.default.node,
  iconClass: _propTypes2.default.string,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  size: _propTypes2.default.string // s m l xl etc... for components height
};

Option.defaultProps = {
  size: 's',
  element: 'div'
};

exports.default = Option;