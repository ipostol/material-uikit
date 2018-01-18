'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Design = require('./Design');

var _Design2 = _interopRequireDefault(_Design);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var design = {
  public_id: 'banner-2-x_trvx4y',
  height: 60
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { display: 'flex', justifyContent: 'center', padding: '50px' } },
    _react2.default.createElement('div', { style: { width: '20px' } }),
    _react2.default.createElement(_Design2.default, { size: 'l', design: design })
  );
};