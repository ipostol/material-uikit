'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bidstackCloudinary = require('bidstack-cloudinary');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageUploader = function (_PureComponent) {
  _inherits(ImageUploader, _PureComponent);

  function ImageUploader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageUploader.__proto__ || Object.getPrototypeOf(ImageUploader)).call.apply(_ref, [this].concat(args))), _this), _this.upload = function (filesObj) {
      var _this$props = _this.props,
          onUpload = _this$props.onUpload,
          onUploadSuccess = _this$props.onUploadSuccess,
          onUploadFail = _this$props.onUploadFail,
          resolutions = _this$props.resolutions;

      var files = Array.prototype.map.call(filesObj, function (file) {
        return file;
      });

      var promises = files.map(function (file) {
        return (0, _bidstackCloudinary.upload)(file).then(function (data) {
          var result = _objectWithoutProperties(data, []);

          if (!result.error) {

            var resolution = result.width + 'x' + result.height;

            if (resolutions && !resolutions.includes(resolution)) {

              result.error = { message: 'The picture size of uploaded file is not supported. Please check and try again' };
            } else if (result.resource_type === 'video' && result.duration > 8) {

              result.error = { message: 'Video duration is too long - it should be less than 8 sec. Please check and try again' };
            }
          }

          return result;
        });
      });

      if (promises.length) {

        var promiseAll = Promise.all(promises);

        promiseAll.then(onUploadSuccess).catch(onUploadFail);

        onUpload(promises.length, promiseAll);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageUploader, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          multiple = _props.multiple,
          accept = _props.accept;


      return _react2.default.createElement('input', {
        type: 'file',
        accept: accept,
        multiple: multiple,
        onChange: function onChange(e) {
          return _this2.upload(e.target.files);
        },
        id: id,
        style: { display: 'none' }
      });
    }
  }]);

  return ImageUploader;
}(_react.PureComponent);

ImageUploader.propTypes = {
  id: _propTypes2.default.string,
  onUpload: _propTypes2.default.func,
  multiple: _propTypes2.default.bool,
  accept: _propTypes2.default.string,
  resolutions: _propTypes2.default.array,
  onUploadSuccess: _propTypes2.default.func,
  onUploadFail: _propTypes2.default.func
};

ImageUploader.defaultProps = {
  onUpload: function onUpload() {},

  accept: 'image/*'
};

exports.default = ImageUploader;