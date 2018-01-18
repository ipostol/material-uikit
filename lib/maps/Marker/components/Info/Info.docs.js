'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _Info = require('./Info');

var _Info2 = _interopRequireDefault(_Info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(_Info2.default, {
      timeslotsCount: 3,
      minPrice: 123,
      maxPrice: 321,
      typeIcon: 'wj0hwqmnqnzj9qgvbisy',
      typeName: 'Digital Billboard',
      resolution: '15x50',
      looping: '30s, 30m, 10m, 10m, 30s, 30m, 10m, 10m',
      place: 'Gregg Point'
    })
  );
};