'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckList = require('./CheckList.scss');

var _CheckList2 = _interopRequireDefault(_CheckList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CheckList = function CheckList(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options,
      _onChange = _ref.onChange,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ['options', 'onChange', 'value']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_CheckList2.default.container, rest.className) },
    options.map(function (option) {
      return _react2.default.createElement(_Checkbox2.default, {
        key: option.id,
        label: option.value,
        checked: value.includes(option.id),
        onChange: function onChange() {
          return _onChange(option.id);
        },
        className: _CheckList2.default.label
      });
    })
  );
};

CheckList.propTypes = {
  options: _propTypes2.default.array,
  value: _propTypes2.default.array,
  onChange: _propTypes2.default.func
};

exports.default = CheckList;