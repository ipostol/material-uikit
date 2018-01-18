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

var _Success = require('./../../icons/Success');

var _Success2 = _interopRequireDefault(_Success);

var _Error = require('./../../icons/Error');

var _Error2 = _interopRequireDefault(_Error);

var _Loader = require('./Loader.scss');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Loader = function Loader(_ref) {
  var status = _ref.status,
      right = _ref.right,
      message = _ref.message,
      rest = _objectWithoutProperties(_ref, ['status', 'right', 'message']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)(_Loader2.default.general, rest.className, _defineProperty({}, _Loader2.default.messageRight, message && right))
    }, rest),
    message,
    _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)(_Loader2.default.loader, status === 'loading' ? _Loader2.default.rotate : null, status === 'error' ? _Loader2.default.error : null, message && !right ? _Loader2.default.marginLeft : null, message && right ? _Loader2.default.marginRight : null)
      },
      status === 'success' ? _react2.default.createElement(_Success2.default, null) : null,
      status === 'error' ? _react2.default.createElement(_Error2.default, null) : null
    )
  );
};

Loader.propTypes = {
  status: _propTypes2.default.string, // loading | error | success
  right: _propTypes2.default.bool,
  message: _propTypes2.default.string
};

exports.default = Loader;