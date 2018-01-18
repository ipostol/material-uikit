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

var _bidstackCloudinary = require('bidstack-cloudinary');

var _bidstackCloudinary2 = _interopRequireDefault(_bidstackCloudinary);

var _Design = require('./Design.scss');

var _Design2 = _interopRequireDefault(_Design);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var sizes = {
  xs: 48,
  s: 104,
  m: 172,
  l: 208,
  xl: 244
};

var Design = function Design(_ref) {
  var design = _ref.design,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['design', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'div',
    _extends({}, rest, {
      className: (0, _classnames2.default)(_Design2.default.design, rest.className),
      style: { width: width || sizes[size], height: height || sizes[size] }
    }),
    _react2.default.createElement('img', {
      src: _bidstackCloudinary2.default[design.resource_type === 'video' ? 'video_thumbnail_url' : 'url'](design.public_id, {
        width: width || sizes[size],
        height: design.height,
        gravity: 'center',
        crop: 'fill'
      }),
      alt: ''
    })
  );
};

Design.propTypes = {
  size: _propTypes2.default.string,
  design: _propTypes2.default.object,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number
};

exports.default = Design;