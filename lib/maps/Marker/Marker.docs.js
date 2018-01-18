'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _Marker = require('./Marker');

var _Marker2 = _interopRequireDefault(_Marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeslot = {
  id: 1,
  current_bid: 123.32,
  looping: '15m',
  'watching?': true,
  start: new Date().getTime(),
  end: new Date().getTime() + 1000000
};

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_Marker2.default, {
      timeslotsCount: 3,
      minPrice: 123,
      maxPrice: 321,
      typeIcon: null,
      typeName: 'Digital Billboard',
      size: '1920x1080',
      place: 'Some place name',
      looping: '30s, 30m, 10m, 10m, 30s, 30m, 10m, 10m'
    })
  );
};