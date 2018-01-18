'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ChipsGroup = require('./ChipsGroup.scss');

var _ChipsGroup2 = _interopRequireDefault(_ChipsGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Element = function Element(_ref) {
  var _cn;

  var isSelected = _ref.isSelected,
      label = _ref.label,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ['isSelected', 'label', 'disabled']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)(_ChipsGroup2.default.element, (_cn = {}, _defineProperty(_cn, _ChipsGroup2.default.selected, isSelected), _defineProperty(_cn, _ChipsGroup2.default.disabled, disabled), _cn))
    }, rest),
    label
  );
};

var ChipsGroup = function ChipsGroup(_ref2) {
  var options = _ref2.options,
      value = _ref2.value,
      onChange = _ref2.onChange,
      className = _ref2.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_ChipsGroup2.default.container, className) },
    options.map(function (element) {
      return _react2.default.createElement(Element, {
        key: element.id,
        isSelected: element.id === value,
        label: element.value,
        disabled: element.disabled,
        onClick: function onClick() {
          return onChange(element.id);
        }
      });
    })
  );
};

exports.default = ChipsGroup;