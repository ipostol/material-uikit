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

var _Button = require('./../Button');

var _Button2 = _interopRequireDefault(_Button);

var _ArrowRight = require('../../icons/ArrowRight');

var _ArrowRight2 = _interopRequireDefault(_ArrowRight);

var _ArrowLeft = require('../../icons/ArrowLeft');

var _ArrowLeft2 = _interopRequireDefault(_ArrowLeft);

var _PagingButton = require('./PagingButton.scss');

var _PagingButton2 = _interopRequireDefault(_PagingButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PagingButton = function PagingButton(_ref) {
  var page = _ref.page,
      active = _ref.active,
      prev = _ref.prev,
      next = _ref.next,
      rest = _objectWithoutProperties(_ref, ['page', 'active', 'prev', 'next']);

  var content = page;

  if (prev) {

    content = _react2.default.createElement(_ArrowLeft2.default, null);
  } else if (next) {

    content = _react2.default.createElement(_ArrowRight2.default, null);
  }

  return _react2.default.createElement(
    _Button2.default,
    _extends({}, rest, {
      className: (0, _classnames2.default)(_PagingButton2.default.button, _defineProperty({}, _PagingButton2.default.active, active), rest.className),
      size: 'm',
      mod: 'secondary'
    }),
    content
  );
};

PagingButton.propTypes = {
  page: _propTypes2.default.number,
  active: _propTypes2.default.bool,
  prev: _propTypes2.default.bool,
  next: _propTypes2.default.bool
};

exports.default = PagingButton;