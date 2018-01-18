'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bell = function Bell(_ref) {
  var containerClassName = _ref.containerClassName,
      pathClassName = _ref.pathClassName;
  return _react2.default.createElement(
    'svg',
    { className: containerClassName, xmlns: 'http://www.w3.org/2000/svg', baseProfile: 'tiny', width: '30', height: '30', viewBox: '0 0 480 480' },
    _react2.default.createElement('path', { className: pathClassName, d: 'M381.834 361.391c5.045 0 9.174-4.125 9.174-9.168v-14.657c0-5.048-3.158-11.848-6.986-15.109 0 0-59.893-50.876-64.393-131.984-5.389-97.003-54.984-93.017-80.742-93.017s-75.348-3.986-80.742 93.017c-4.508 81.108-64.389 131.984-64.389 131.984-3.836 3.262-6.986 10.062-6.986 15.109v14.657c0 5.043 4.125 9.168 9.174 9.168h285.89zM236.022 79.188h5.734l3.365-.013c7.93 0 16.131.53 24.188 2.235v-7.158c0-10.031-8.211-18.25-18.256-18.25h-24.328c-10.049 0-18.26 8.219-18.26 18.25v7.158c8.055-1.705 16.258-2.235 24.188-2.235l3.369.013zM202.381 379.641c0 16.736 13.686 36.363 30.422 36.363h12.172c16.736 0 30.422-19.627 30.422-36.363h-73.016z' })
  );
};

Bell.propTypes = {
  containerClassName: _propTypes2.default.string,
  pathClassName: _propTypes2.default.string
};

exports.default = Bell;