'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Label = require('../../informers/Label');

var _Label2 = _interopRequireDefault(_Label);

var _TextArea = require('./TextArea.scss');

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_PureComponent) {
  _inherits(TextArea, _PureComponent);

  function TextArea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      scrollrows: 0,
      isFocused: false
    }, _this.onFocus = function (e) {
      var onFocus = _this.props.onFocus;


      _this.setState({ isFocused: true });

      onFocus(e);
    }, _this.onBlur = function (e) {
      var onBlur = _this.props.onBlur;


      _this.setState({ isFocused: false });

      onBlur(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextArea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.recalc();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {

      if (prevProps.value !== this.props.value) {

        this.recalc();
      }
    }
  }, {
    key: 'recalc',
    value: function recalc() {
      var value = this.props.value;


      var height = 36 + (value && (value.split('\n').length - 1) * 23 || 0);

      this.setState({ // eslint-disable-line
        scrollrows: value ? parseInt((this.textarea.scrollHeight - height + 2) / 23, 10) : 0
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          value = _props.value,
          label = _props.label,
          optional = _props.optional,
          rest = _objectWithoutProperties(_props, ['className', 'value', 'label', 'optional']);

      var height = (value && (value.split('\n').length - 1) * 23 || 0) + this.state.scrollrows * 23;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Label2.default,
          { optional: optional, isFocused: this.state.isFocused },
          label
        ),
        _react2.default.createElement('textarea', _extends({
          ref: function ref(_ref2) {
            return _this2.textarea = _ref2;
          },
          id: 'text'
        }, rest, {
          style: { height: 36 + height },
          value: value,
          className: (0, _classnames2.default)(_TextArea2.default.general, className)
        }))
      );
    }
  }]);

  return TextArea;
}(_react.PureComponent);

TextArea.propTypes = {
  className: _propTypes2.default.string,
  value: _propTypes2.default.string,
  label: _propTypes2.default.node,
  optional: _propTypes2.default.bool,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func
};

TextArea.defaultProps = {
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
};

exports.default = TextArea;