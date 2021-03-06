'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var image = require('../DropdownGray/dropdown_gray.svg');

var ArrowLeft = function ArrowLeft(_ref) {
  var style = _ref.style,
      rest = _objectWithoutProperties(_ref, ['style']);

  return _react2.default.createElement('img', _extends({ style: _extends({ width: '13px', transform: 'rotate(270deg)' }, style), src: image, alt: '' }, rest));
};

ArrowLeft.propTypes = {
  style: _propTypes2.default.object
};

exports.default = ArrowLeft;