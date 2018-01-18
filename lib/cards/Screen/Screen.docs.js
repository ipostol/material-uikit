'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Screen = require('./Screen');

var _Screen2 = _interopRequireDefault(_Screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' } },
    _react2.default.createElement(_Screen2.default, {
      cost: '\xA34000',
      description: 'Description',
      places: 'Places',
      resolutions: 'Resolutions',
      images: ['mhnzlkatwgr8nt0j88th']
    })
  );
};