'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _bidstackCloudinary = require('bidstack-cloudinary');

var _bidstackCloudinary2 = _interopRequireDefault(_bidstackCloudinary);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Place = require('../../../../icons/Place');

var _Place2 = _interopRequireDefault(_Place);

var _Timeslots = require('../../../../icons/Timeslots');

var _Timeslots2 = _interopRequireDefault(_Timeslots);

var _TimeslotsTooltip = require('../../../../icons/TimeslotsTooltip');

var _TimeslotsTooltip2 = _interopRequireDefault(_TimeslotsTooltip);

var _Resolution = require('../../../../icons/Resolution');

var _Resolution2 = _interopRequireDefault(_Resolution);

var _Looping = require('../../../../icons/Looping');

var _Looping2 = _interopRequireDefault(_Looping);

var _Info = require('./Info.scss');

var _Info2 = _interopRequireDefault(_Info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = function Info(_ref) {
  var timeslotsCount = _ref.timeslotsCount,
      minPrice = _ref.minPrice,
      maxPrice = _ref.maxPrice,
      typeName = _ref.typeName,
      typeIcon = _ref.typeIcon,
      resolution = _ref.resolution,
      looping = _ref.looping,
      place = _ref.place;


  var isMultiple = timeslotsCount > 1;

  var price = isMultiple ? _react2.default.createElement(
    'div',
    null,
    '\xA3',
    (0, _numeral2.default)(minPrice).format('0,0'),
    ' \u2013 \xA3',
    (0, _numeral2.default)(maxPrice).format('0,0')
  ) : _react2.default.createElement(
    'span',
    null,
    '\xA3',
    (0, _numeral2.default)(minPrice).format('0,0')
  );

  var icon = _bidstackCloudinary2.default.url(typeIcon, { width: 16, height: 16 });

  return _react2.default.createElement(
    'div',
    { className: _Info2.default.general },
    _react2.default.createElement(
      'div',
      { className: _Info2.default.header },
      _react2.default.createElement(
        'div',
        { className: _Info2.default.price },
        price
      )
    ),
    _react2.default.createElement('div', { className: _Info2.default.line }),
    _react2.default.createElement(
      'div',
      { className: _Info2.default.infoWrap },
      _react2.default.createElement(_Place2.default, { className: (0, _classnames2.default)(_Info2.default.icon, _Info2.default.invertIcon) }),
      _react2.default.createElement(
        'div',
        null,
        place
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _Info2.default.infoWrap },
      _react2.default.createElement('img', { src: icon, alt: '', className: _Info2.default.icon }),
      _react2.default.createElement(
        'div',
        null,
        typeName
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _Info2.default.infoWrap },
      isMultiple ? _react2.default.createElement(_TimeslotsTooltip2.default, { className: _Info2.default.icon }) : _react2.default.createElement(_Timeslots2.default, { className: (0, _classnames2.default)(_Info2.default.icon, _Info2.default.invertIcon) }),
      _react2.default.createElement(
        'div',
        null,
        timeslotsCount,
        ' Timeslot',
        isMultiple ? 's' : ''
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _Info2.default.infoWrap },
      _react2.default.createElement(_Resolution2.default, { className: (0, _classnames2.default)(_Info2.default.icon, _Info2.default.invertIcon) }),
      _react2.default.createElement(
        'div',
        null,
        resolution,
        'px'
      )
    ),
    looping && _react2.default.createElement(
      'div',
      { className: _Info2.default.infoWrap },
      _react2.default.createElement(_Looping2.default, { className: (0, _classnames2.default)(_Info2.default.icon, _Info2.default.invertIcon) }),
      _react2.default.createElement(
        'div',
        null,
        'Looping ',
        looping
      )
    )
  );
};

Info.propTypes = {
  place: _propTypes2.default.node,
  typeIcon: _propTypes2.default.string,
  typeName: _propTypes2.default.node,
  timeslotsCount: _propTypes2.default.number,
  minPrice: _propTypes2.default.number,
  maxPrice: _propTypes2.default.number,
  resolution: _propTypes2.default.string,
  looping: _propTypes2.default.string
};

exports.default = Info;