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

var _Plus = require('../../icons/Plus');

var _Plus2 = _interopRequireDefault(_Plus);

var _Button = require('./../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Add = require('./Add.scss');

var _Add2 = _interopRequireDefault(_Add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Add = function Add(props) {
  return _react2.default.createElement(_Button2.default, _extends({}, props, {
    mod: 'primary',
    icon: _react2.default.createElement(_Plus2.default, null),
    round: 'round',
    className: (0, _classnames2.default)(_Add2.default.add, props.className)
  }));
};

exports.default = Add;