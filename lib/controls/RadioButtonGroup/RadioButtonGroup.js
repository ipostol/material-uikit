'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _RadioButton = require('./components/RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _RadioButtonGroup = require('./RadioButtonGroup.scss');

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RadioButtonGroup = function RadioButtonGroup(_ref) {
  var active = _ref.active,
      options = _ref.options,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['active', 'options', 'onChange']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_RadioButtonGroup2.default.general, rest.className) },
    options.map(function (option) {
      return _react2.default.createElement(_RadioButton2.default, {
        key: option.id,
        isSelected: option.id === active,
        label: option.name,
        onClick: function onClick() {
          return onChange(option.id);
        }
      });
    })
  );
};

exports.default = RadioButtonGroup;