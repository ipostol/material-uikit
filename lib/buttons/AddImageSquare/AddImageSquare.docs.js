'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddImageSquare = require('./AddImageSquare');

var _AddImageSquare2 = _interopRequireDefault(_AddImageSquare);

var _markup = require('./markup.scss');

var _markup2 = _interopRequireDefault(_markup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%', width: '800px', display: 'flex', flexWrap: 'wrap', marginLeft: '400px' } },
    _react2.default.createElement(_AddImageSquare2.default, null),
    _react2.default.createElement(_AddImageSquare2.default, { className: _markup2.default.test }),
    _react2.default.createElement(_AddImageSquare2.default, { isLoading: true }),
    _react2.default.createElement(_AddImageSquare2.default, { className: _markup2.default.test, isLoading: true })
  );
};