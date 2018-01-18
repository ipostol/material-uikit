'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _UploadSmall = require('../../icons/UploadSmall');

var _UploadSmall2 = _interopRequireDefault(_UploadSmall);

var _AddImage = require('./AddImage.scss');

var _AddImage2 = _interopRequireDefault(_AddImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AddImage = function AddImage(_ref) {
  var size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(_Button2.default, _extends({
    mod: 'link',
    className: (0, _classnames2.default)(_AddImage2.default.addImageButton, _AddImage2.default[size]),
    icon: _react2.default.createElement(_UploadSmall2.default, null)
  }, rest));
};

AddImage.propTypes = {
  size: _propTypes2.default.string
};

AddImage.defaultProps = {
  size: 'l'
};

exports.default = AddImage;