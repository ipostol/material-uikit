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

var _DropdownArrows = require('./../../icons/DropdownArrows/');

var _DropdownArrows2 = _interopRequireDefault(_DropdownArrows);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Option = require('../Option');

var _Option2 = _interopRequireDefault(_Option);

var _Label = require('../../informers/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Select = require('./Select.scss');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Select = function Select(_ref) {
  var options = _ref.options,
      value = _ref.value,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      error = _ref.error,
      label = _ref.label,
      optional = _ref.optional,
      rest = _objectWithoutProperties(_ref, ['options', 'value', 'placeholder', 'onChange', 'error', 'label', 'optional']);

  var activeOption = options.find(function (option) {
    return option.id === value;
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Label2.default,
      {
        optional: optional,
        isError: error
      },
      label
    ),
    _react2.default.createElement(
      _Dropdown2.default,
      _extends({
        trigger: [_react2.default.createElement(
          'div',
          {
            key: '0',
            className: (0, _classnames2.default)(_Select2.default.trigger, _Select2.default.general, _defineProperty({}, _Select2.default.placeholder, !activeOption))
          },
          activeOption ? activeOption.value : placeholder
        )],
        contentWidth: '100%',
        className: _Select2.default.fullWidth
      }, rest),
      _react2.default.createElement(
        'div',
        { className: _Select2.default.content },
        options.map(function (_ref2) {
          var id = _ref2.id,
              optionValue = _ref2.value,
              optionRest = _objectWithoutProperties(_ref2, ['id', 'value']);

          return _react2.default.createElement(
            _Option2.default,
            _extends({ key: id, onClick: function onClick() {
                return onChange(id);
              } }, optionRest, { size: 'l' }),
            optionValue
          );
        })
      )
    ),
    error && _react2.default.createElement(
      'div',
      { className: _Select2.default.warning },
      error
    )
  );
};

Select.propTypes = {
  value: _propTypes2.default.any,
  placeholder: _propTypes2.default.node,
  onChange: _propTypes2.default.func,
  options: _propTypes2.default.array, // [{ id: 1, value: 'value1' }, { id: 2, value: 'value2' }]
  error: _propTypes2.default.node,
  optional: _propTypes2.default.bool,
  label: _propTypes2.default.node
};

Select.defaultProps = {
  onChange: function onChange() {},

  placeholder: 'Please select'
};

exports.default = Select;