'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ImageUploader = require('../../uploaders/ImageUploader');

var _ImageUploader2 = _interopRequireDefault(_ImageUploader);

var _Upload = require('../../icons/Upload');

var _Upload2 = _interopRequireDefault(_Upload);

var _Loader = require('../../loaders/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _AddImageSquare = require('./AddImageSquare.scss');

var _AddImageSquare2 = _interopRequireDefault(_AddImageSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function Loading(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_AddImageSquare2.default.container, className, _AddImageSquare2.default.loading) },
    _react2.default.createElement(_Loader2.default, { status: 'loading' })
  );
};

var AddImageSquare = function (_PureComponent) {
  _inherits(AddImageSquare, _PureComponent);

  function AddImageSquare() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AddImageSquare);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AddImageSquare.__proto__ || Object.getPrototypeOf(AddImageSquare)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      dragging: 0
    }, _this.enter = function () {
      return _this.setState({ dragging: _this.state.dragging + 1 });
    }, _this.leave = function () {
      return _this.setState({ dragging: _this.state.dragging - 1 });
    }, _this.drop = function (e) {

      e.preventDefault();

      _this.setState({
        dragging: 0
      });

      _this.imgUploader.upload(e.dataTransfer.files);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddImageSquare, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isLoading = _props.isLoading,
          className = _props.className,
          htmlFor = _props.htmlFor,
          onUpload = _props.onUpload,
          onUploadSuccess = _props.onUploadSuccess;


      if (isLoading) {

        return _react2.default.createElement(Loading, { className: className });
      }

      return _react2.default.createElement(
        'label',
        {
          className: (0, _classnames2.default)(_AddImageSquare2.default.container, _defineProperty({}, _AddImageSquare2.default.dragging, this.state.dragging > 0), className),
          htmlFor: 'upload',
          onDragOver: function onDragOver(e) {
            return e.preventDefault();
          },
          onDragEnter: this.enter,
          onDragLeave: this.leave,
          onDrop: this.drop
        },
        _react2.default.createElement(_Upload2.default, { className: _AddImageSquare2.default.icon }),
        _react2.default.createElement(
          'div',
          { className: _AddImageSquare2.default.text },
          'Drag and drop your screens anywhere or choose file'
        ),
        _react2.default.createElement(_ImageUploader2.default, {
          ref: function ref(_ref3) {
            return _this2.imgUploader = _ref3;
          },
          accept: 'image/*,video/*',
          id: 'upload',
          onUpload: onUpload,
          onUploadSuccess: onUploadSuccess,
          resolutions: ['1440x60']
        })
      );
    }
  }]);

  return AddImageSquare;
}(_react.PureComponent);

exports.default = AddImageSquare;