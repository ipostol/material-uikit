'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _More = require('../../icons/More');

var _More2 = _interopRequireDefault(_More);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Option = require('../Option');

var _Option2 = _interopRequireDefault(_Option);

var _IconMenu = require('./IconMenu.scss');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconMenu = function IconMenu(_ref) {
  var icon = _ref.icon,
      options = _ref.options,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['icon', 'options', 'children']);

  return _react2.default.createElement(
    _Dropdown2.default,
    _extends({
      trigger: _react2.default.createElement(
        'div',
        { className: _IconMenu2.default.icon },
        icon
      )
    }, rest),
    options ? options.map(function (_ref2, index) {
      var value = _ref2.value,
          optionRest = _objectWithoutProperties(_ref2, ['value']);

      return _react2.default.createElement(
        _Option2.default,
        _extends({ key: index }, optionRest),
        value
      );
    }) : children
  );
};

IconMenu.propTypes = {
  icon: _propTypes2.default.node,
  children: _propTypes2.default.node,
  options: _propTypes2.default.array
};

IconMenu.defaultProps = {
  icon: _react2.default.createElement(_More2.default, null)
};

exports.default = IconMenu;