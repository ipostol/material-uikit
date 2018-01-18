'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _bidstackCloudinary = require('bidstack-cloudinary');

var _bidstackCloudinary2 = _interopRequireDefault(_bidstackCloudinary);

var _Tooltip = require('../../tooltips/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Info = require('./components/Info');

var _Info2 = _interopRequireDefault(_Info);

var _Marker = require('./Marker.scss');

var _Marker2 = _interopRequireDefault(_Marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Marker = function Marker(_ref) {
  var timeslotsCount = _ref.timeslotsCount,
      typeName = _ref.typeName,
      typeIcon = _ref.typeIcon,
      minPrice = _ref.minPrice,
      maxPrice = _ref.maxPrice,
      size = _ref.size,
      place = _ref.place,
      looping = _ref.looping,
      isHover = _ref.isHover,
      isVisited = _ref.isVisited,
      isLoosing = _ref.isLoosing,
      isWatching = _ref.isWatching,
      isWinning = _ref.isWinning,
      onClick = _ref.onClick,
      $hover = _ref.$hover;


  var statusColor = 'general';

  if (isHover || $hover) {

    statusColor = 'hover';
  } else if (isVisited) {

    statusColor = 'visited';
  } else if (isLoosing) {

    statusColor = 'loosing';
  } else if (isWinning) {

    statusColor = 'winning';
  }

  var isMultiple = timeslotsCount > 1;
  var icon = _bidstackCloudinary2.default.url(typeIcon, { width: 16, height: 16 });

  var info = _react2.default.createElement(_Info2.default, {
    timeslotsCount: timeslotsCount,
    place: place,
    typeName: typeName,
    typeIcon: typeIcon,
    minPrice: minPrice,
    maxPrice: maxPrice,
    resolution: size,
    looping: looping
  });

  return _react2.default.createElement(
    _Tooltip2.default,
    {
      placement: 'bottom',
      overlay: info,
      prefixCls: 'rc-tooltip-custom',
      align: { points: ['tl', 'br'] }
    },
    _react2.default.createElement(
      'div',
      {
        className: _Marker2.default.container,
        onClick: onClick,
        style: $hover || isHover ? { zIndex: 2 } : null
      },
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_Marker2.default.general, _Marker2.default[statusColor]) },
        _react2.default.createElement('img', { className: _Marker2.default.icon, src: icon, alt: '' }),
        '\xA3',
        (0, _numeral2.default)(minPrice).format('0,0'),
        isMultiple ? '+' : null
      ),
      _react2.default.createElement('div', { className: (0, _classnames2.default)(_Marker2.default.arrow, _Marker2.default[statusColor + 'Arrow']) })
    )
  );
};

exports.default = Marker;