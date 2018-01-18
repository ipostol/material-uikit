'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Close = require('../../icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Button = require('../../buttons/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('./Dialog.scss');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = function Dialog(_ref) {
  var header = _ref.header,
      description = _ref.description,
      onClose = _ref.onClose,
      primaryProps = _ref.primaryProps,
      secondaryProps = _ref.secondaryProps;
  return _react2.default.createElement(
    'div',
    { className: _Dialog2.default.general },
    _react2.default.createElement(
      'div',
      { className: _Dialog2.default.header },
      header
    ),
    _react2.default.createElement(
      'div',
      { className: _Dialog2.default.description },
      description
    ),
    _react2.default.createElement(
      'div',
      { className: _Dialog2.default.wrap },
      _react2.default.createElement(
        _Button2.default,
        _extends({
          mod: 'tertiary',
          className: _Dialog2.default.button,
          onClick: onClose
        }, secondaryProps),
        'Cancel'
      ),
      _react2.default.createElement(
        _Button2.default,
        _extends({
          mod: 'secondary',
          className: _Dialog2.default.button
        }, primaryProps),
        'Delete'
      )
    ),
    _react2.default.createElement(
      _Button2.default,
      { className: _Dialog2.default.close, onClick: onClose, mod: 'icon' },
      _react2.default.createElement(_Close2.default, null)
    )
  );
};

exports.default = Dialog;


Dialog.propTypes = {
  header: _propTypes2.default.string,
  description: _propTypes2.default.string,
  onClose: _propTypes2.default.func,
  primaryProps: _propTypes2.default.object,
  secondaryProps: _propTypes2.default.object
};