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

var _ArrowDown = require('../../icons/ArrowDown');

var _ArrowDown2 = _interopRequireDefault(_ArrowDown);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Option = require('../Option');

var _Option2 = _interopRequireDefault(_Option);

var _DropdownMenu = require('./DropdownMenu.scss');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DropdownMenu = function DropdownMenu(_ref) {
  var value = _ref.value,
      options = _ref.options,
      onChange = _ref.onChange,
      icon = _ref.icon,
      prefix = _ref.prefix,
      className = _ref.className,
      triggerClassName = _ref.triggerClassName,
      rest = _objectWithoutProperties(_ref, ['value', 'options', 'onChange', 'icon', 'prefix', 'className', 'triggerClassName']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_DropdownMenu2.default.container, className) },
    prefix ? _react2.default.createElement(
      'div',
      { className: _DropdownMenu2.default.prefix },
      prefix
    ) : null,
    _react2.default.createElement(
      _Dropdown2.default,
      _extends({
        trigger: _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(_DropdownMenu2.default.trigger, triggerClassName) },
          (options.find(function (option) {
            return option.id === value;
          }) || {}).value,
          _react2.default.createElement(
            'div',
            { className: _DropdownMenu2.default.icon },
            icon
          )
        )
      }, rest),
      options.map(function (_ref2) {
        var id = _ref2.id,
            optionValue = _ref2.value,
            optionRest = _objectWithoutProperties(_ref2, ['id', 'value']);

        return _react2.default.createElement(
          _Option2.default,
          _extends({ key: id }, optionRest, { onClick: function onClick() {
              return onChange(id);
            } }),
          optionValue
        );
      })
    )
  );
};

DropdownMenu.propTypes = {
  onChange: _propTypes2.default.func,
  options: _propTypes2.default.array,
  value: _propTypes2.default.any,
  icon: _propTypes2.default.node,
  className: _propTypes2.default.string,
  triggerClassName: _propTypes2.default.string,
  prefix: _propTypes2.default.string
};

DropdownMenu.defaultProps = {
  onChange: function onChange() {},

  icon: _react2.default.createElement(_ArrowDown2.default, null)
};

exports.default = DropdownMenu;