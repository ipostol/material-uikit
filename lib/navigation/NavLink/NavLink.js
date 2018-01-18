'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ArrowRight = require('./../../icons/ArrowRight');

var _ArrowRight2 = _interopRequireDefault(_ArrowRight);

var _NavLink = require('./NavLink.scss');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      text = _ref.text,
      Element = _ref.element,
      rest = _objectWithoutProperties(_ref, ['to', 'text', 'element']);

  return _react2.default.createElement(
    Element,
    _extends({}, rest, {
      className: (0, _classnames2.default)(_NavLink2.default.general, to ? _NavLink2.default.bold : null)
    }),
    _react2.default.createElement(_ArrowRight2.default, { style: { margin: '0px 16px' } }),
    text
  );
};

NavLink.propTypes = {
  to: _propTypes2.default.string,
  text: _propTypes2.default.string,
  element: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};

NavLink.defaultProps = {
  element: _reactRouter.Link
};

exports.default = NavLink;