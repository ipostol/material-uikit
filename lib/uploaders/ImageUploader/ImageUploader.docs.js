'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _ImageUploader = require('./ImageUploader');

var _ImageUploader2 = _interopRequireDefault(_ImageUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactMarkupComponents.Skin,
    null,
    _react2.default.createElement(
      'label',
      { htmlFor: 'logo_upload' },
      'Upload'
    ),
    _react2.default.createElement(_ImageUploader2.default, {
      id: 'logo_upload',
      onUpload: function onUpload() {
        return console.log('onUpload');
      },
      onUploadSuccess: function onUploadSuccess(e) {
        return console.log('onUploadSuccess', e);
      }
    })
  );
};