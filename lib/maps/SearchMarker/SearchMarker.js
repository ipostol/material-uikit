'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchMarker = require('./SearchMarker.scss');

var _SearchMarker2 = _interopRequireDefault(_SearchMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pinSearchImg = require('./images/pinSearch.svg');

var SearchMarker = function SearchMarker() {
  return _react2.default.createElement('img', { className: _SearchMarker2.default.general, src: pinSearchImg, alt: 'Search Marker' });
};

exports.default = SearchMarker;