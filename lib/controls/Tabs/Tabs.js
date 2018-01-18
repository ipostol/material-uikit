'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Tabs = require('./Tabs.scss');

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Tabs = function Tabs(_ref) {
  var active = _ref.active,
      tabs = _ref.tabs,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['active', 'tabs', 'onChange']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_Tabs2.default.general, rest.className) },
    tabs.map(function (tab) {
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(_Tabs2.default.tab, _defineProperty({}, _Tabs2.default.selected, active === tab.id)),
          key: tab.id,
          onClick: function onClick() {
            return onChange(tab.id);
          }
        },
        tab.name
      );
    }),
    _react2.default.createElement('div', { className: _Tabs2.default.underline })
  );
};

exports.default = Tabs;