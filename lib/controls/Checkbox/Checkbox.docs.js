'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxDocs = exports.CheckboxSample = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxSample = exports.CheckboxSample = function CheckboxSample() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _react2.default.createElement(_Checkbox2.default, props);
};

var CheckboxDocs = exports.CheckboxDocs = function CheckboxDocs() {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    { style: { backgroundColor: 'gray' } },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(CheckboxSample, {
        label: 'Unchecked',
        onChange: function onChange(value) {
          return console.log('change', value);
        },
        checked: false
      }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(CheckboxSample, {
        label: 'Checked',
        checked: true,
        onChange: function onChange() {}
      }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(CheckboxSample, {
        label: 'Unchecked round',
        onChange: function onChange() {},
        checked: false,
        mod: 'round'
      }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(CheckboxSample, {
        label: 'Checked round',
        checked: true,
        onChange: function onChange() {},
        mod: 'round'
      }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(CheckboxSample, {
        checked: true,
        onChange: function onChange() {},
        label: 'Disabled',
        disabled: true
      }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(CheckboxSample, {
        onChange: function onChange() {}
      }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(CheckboxSample, {
        checked: true,
        onChange: function onChange() {}
      })
    )
  );
};

exports.default = CheckboxDocs;