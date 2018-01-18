'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nameToColor = require('name-to-color');

var _nameToColor2 = _interopRequireDefault(_nameToColor);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bidstackCloudinary = require('bidstack-cloudinary');

var _bidstackCloudinary2 = _interopRequireDefault(_bidstackCloudinary);

var _Avatar = require('./Avatar.scss');

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var sizes = {
  xs: 24,
  s: 32,
  sm: 36,
  m: 40,
  l: 56
};

var Avatar = function Avatar(_ref) {
  var image = _ref.image,
      name = _ref.name,
      count = _ref.count,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['image', 'name', 'count', 'size']);

  return _react2.default.createElement(
    'div',
    _extends({}, rest, {
      className: (0, _classnames2.default)(_Avatar2.default.general, _Avatar2.default[size], rest.className),
      style: !image ? { backgroundColor: (0, _nameToColor2.default)(name) } : null
    }),
    image ? _react2.default.createElement('div', { className: _Avatar2.default.image, style: { backgroundImage: 'url(' + _bidstackCloudinary2.default.url(image, { width: sizes[size], height: sizes[size], crop: 'fill' }) + ')' } }) : _react2.default.createElement(
      'div',
      null,
      count ? '+' + count : name.split(' ').slice(0, 2).map(function (str) {
        return str[0];
      }).join('')
    )
  );
};

Avatar.propTypes = {
  image: _propTypes2.default.node,
  name: _propTypes2.default.string,
  size: _propTypes2.default.string,
  color: _propTypes2.default.string,
  count: _propTypes2.default.number
};

Avatar.defaultProps = {
  size: 'm'
};

exports.default = Avatar;