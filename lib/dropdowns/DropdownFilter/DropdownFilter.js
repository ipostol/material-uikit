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

var _Button = require('../../buttons/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Filter = require('../../icons/Filter');

var _Filter2 = _interopRequireDefault(_Filter);

var _Checkbox = require('../../controls/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Option = require('../Option');

var _Option2 = _interopRequireDefault(_Option);

var _DropdownFilter = require('./DropdownFilter.scss');

var _DropdownFilter2 = _interopRequireDefault(_DropdownFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // FIXME


var DropdownFilter = function DropdownFilter(_ref) {
  var value = _ref.value,
      options = _ref.options,
      onChange = _ref.onChange,
      className = _ref.className,
      contentWidth = _ref.contentWidth,
      trigger = _ref.trigger,
      rest = _objectWithoutProperties(_ref, ['value', 'options', 'onChange', 'className', 'contentWidth', 'trigger']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_DropdownFilter2.default.container, className) },
    _react2.default.createElement(
      _Dropdown2.default,
      _extends({
        trigger: trigger,
        contentWidth: contentWidth
      }, rest),
      options.map(function (_ref2, index) {
        var id = _ref2.id,
            checked = _ref2.checked,
            label = _ref2.label,
            separator = _ref2.separator,
            optionRest = _objectWithoutProperties(_ref2, ['id', 'checked', 'label', 'separator']);

        if (separator) {

          return _react2.default.createElement('div', { className: _DropdownFilter2.default.separator, key: 'separator_' + index });
        }

        return _react2.default.createElement(
          _Option2.default,
          _extends({
            key: id
          }, optionRest, {
            onClick: function onClick(e) {

              e.nativeEvent.stopImmediatePropagation();
              onChange(id, !checked);
            }
          }),
          _react2.default.createElement(_Checkbox2.default, {
            checked: checked,
            label: label
          })
        );
      })
    )
  );
};

DropdownFilter.propTypes = {
  trigger: _propTypes2.default.node,
  onChange: _propTypes2.default.func,
  options: _propTypes2.default.array,
  value: _propTypes2.default.any,
  className: _propTypes2.default.string,
  contentWidth: _propTypes2.default.number
};

DropdownFilter.defaultProps = {
  onChange: function onChange() {},

  contentWidth: 272,
  trigger: _react2.default.createElement(
    _Button2.default,
    {
      mod: 'secondary',
      size: 'm',
      width: 95,
      icon: _react2.default.createElement(_Filter2.default, { style: { marginLeft: '-8px', marginRight: '8px' } }),
      className: _DropdownFilter2.default.button
    },
    'Filter'
  )
};

exports.default = DropdownFilter;