'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Screen = require('../Screen');

var _Screen2 = _interopRequireDefault(_Screen);

var _Target = require('../../icons/Target');

var _Target2 = _interopRequireDefault(_Target);

var _Package = require('./Package.scss');

var _Package2 = _interopRequireDefault(_Package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Package = function Package(_ref) {
  var header = _ref.header,
      percent = _ref.percent,
      props = _objectWithoutProperties(_ref, ['header', 'percent']);

  return _react2.default.createElement(
    _Screen2.default,
    props,
    _react2.default.createElement(
      'div',
      { className: _Package2.default.headerWrap },
      _react2.default.createElement(
        'div',
        { className: _Package2.default.header },
        header
      ),
      _react2.default.createElement(_Target2.default, { className: _Package2.default.icon }),
      _react2.default.createElement(
        'div',
        { className: _Package2.default.percent },
        percent
      )
    )
  );
};

Package.propTypes = {
  header: _propTypes2.default.string,
  percent: _propTypes2.default.string
};

exports.default = Package;