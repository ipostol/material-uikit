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

var _Checkbox = require('../../icons/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckboxRound = require('../../icons/CheckboxRound');

var _CheckboxRound2 = _interopRequireDefault(_CheckboxRound);

var _Checkbox3 = require('./Checkbox.scss');

var _Checkbox4 = _interopRequireDefault(_Checkbox3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Checkbox = function Checkbox(_ref) {
  var _cn;

  var label = _ref.label,
      checked = _ref.checked,
      disabled = _ref.disabled,
      className = _ref.className,
      onChange = _ref.onChange,
      mod = _ref.mod,
      rest = _objectWithoutProperties(_ref, ['label', 'checked', 'disabled', 'className', 'onChange', 'mod']);

  return _react2.default.createElement(
    'button',
    _extends({
      className: (0, _classnames2.default)(_Checkbox4.default.general, className),
      onClick: disabled ? null : onChange
    }, rest),
    _react2.default.createElement(
      'span',
      {
        className: (0, _classnames2.default)(_Checkbox4.default.checkbox, _Checkbox4.default[mod], (_cn = {}, _defineProperty(_cn, _Checkbox4.default.disabled, disabled), _defineProperty(_cn, _Checkbox4.default.checked, checked), _cn))
      },
      checked && !disabled && !mod ? _react2.default.createElement(_Checkbox2.default, null) : null,
      checked && !disabled && mod === 'round' ? _react2.default.createElement(_CheckboxRound2.default, null) : null
    ),
    label && _react2.default.createElement(
      'span',
      { className: _Checkbox4.default.label },
      label
    )
  );
};

Checkbox.propTypes = {
  disabled: _propTypes2.default.bool,
  checked: _propTypes2.default.bool,
  mod: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  label: _propTypes2.default.any,
  className: _propTypes2.default.string
};

Checkbox.defaultProps = {
  checked: false,
  onChange: function onChange() {}
};

exports.default = Checkbox;