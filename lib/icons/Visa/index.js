'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = require('./visa.png');
var image2x = require('./visa@2x.png');
var image3x = require('./visa@3x.png');

var Amex = function Amex(props) {
  return _react2.default.createElement('img', _extends({
    src: image,
    srcSet: image + ' 1x, ' + image2x + ' 2x, ' + image3x + ' 3x',
    alt: ''
  }, props, {
    style: { display: 'block' }
  }));
};

exports.default = Amex;