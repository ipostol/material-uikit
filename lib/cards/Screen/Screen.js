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

var _Screen = require('./Screen.scss');

var _Screen2 = _interopRequireDefault(_Screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Screen = function Screen(_ref) {
  var images = _ref.images,
      cost = _ref.cost,
      description = _ref.description,
      places = _ref.places,
      resolutions = _ref.resolutions,
      children = _ref.children,
      _ref$element = _ref.element,
      Element = _ref$element === undefined ? 'div' : _ref$element,
      rest = _objectWithoutProperties(_ref, ['images', 'cost', 'description', 'places', 'resolutions', 'children', 'element']);

  return _react2.default.createElement(
    Element,
    _extends({ className: (0, _classnames2.default)(_Screen2.default.general, rest.className) }, rest),
    children,
    images.length > 1 ? _react2.default.createElement(
      'div',
      { className: _Screen2.default.imagesWrap },
      _react2.default.createElement('img', {
        src: _bidstackCloudinary2.default.url(images[0], { crop: 'fill', width: 200, height: 180 }),
        alt: '',
        className: _Screen2.default.firstImage
      }),
      _react2.default.createElement(
        'div',
        { className: _Screen2.default.wrap },
        _react2.default.createElement('img', {
          src: _bidstackCloudinary2.default.url(images[1], { crop: 'fill', width: 117, height: 88 }),
          alt: '',
          className: _Screen2.default.image
        }),
        _react2.default.createElement('img', {
          src: _bidstackCloudinary2.default.url(images[2], { crop: 'fill', width: 117, height: 88 }),
          alt: '',
          className: _Screen2.default.image
        })
      )
    ) : _react2.default.createElement('img', {
      src: _bidstackCloudinary2.default.url(images[0], { crop: 'fill', width: 337, height: 211 }),
      alt: '',
      className: _Screen2.default.mainImage
    }),
    _react2.default.createElement(
      'div',
      { className: _Screen2.default.infoWrap },
      _react2.default.createElement(
        'div',
        { className: _Screen2.default.cost },
        cost
      ),
      _react2.default.createElement(
        'div',
        { className: _Screen2.default.screens },
        description
      ),
      _react2.default.createElement(
        'div',
        { className: _Screen2.default.caption },
        places
      ),
      _react2.default.createElement(
        'div',
        { className: _Screen2.default.caption },
        resolutions
      )
    )
  );
};

Screen.propTypes = {
  images: _propTypes2.default.array,
  cost: _propTypes2.default.string,
  description: _propTypes2.default.string,
  places: _propTypes2.default.string,
  resolutions: _propTypes2.default.string,
  children: _propTypes2.default.node,
  element: _propTypes2.default.any
};

exports.default = Screen;