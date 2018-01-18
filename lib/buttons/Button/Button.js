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

var _reactInk = require('react-ink');

var _reactInk2 = _interopRequireDefault(_reactInk);

var _Button = require('./Button.scss');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isLoading: false
    }, _this.startLoading = function () {
      return _this.setState({ isLoading: true });
    }, _this.endLoading = function () {
      return _this.setState({ isLoading: false });
    }, _this.onClick = function (e) {
      var _this$props = _this.props,
          smart = _this$props.smart,
          onClick = _this$props.onClick;


      if (smart) {

        var promise = onClick(e);

        if (promise instanceof Promise) {

          _this.startLoading();
          promise.then(_this.endLoading).catch(_this.endLoading);
        }
      } else {

        onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _cn;

      var _props = this.props,
          mod = _props.mod,
          size = _props.size,
          children = _props.children,
          icon = _props.icon,
          disabled = _props.disabled,
          loadingProp = _props.loading,
          className = _props.className,
          round = _props.round,
          Element = _props.element,
          width = _props.width,
          smart = _props.smart,
          rest = _objectWithoutProperties(_props, ['mod', 'size', 'children', 'icon', 'disabled', 'loading', 'className', 'round', 'element', 'width', 'smart']);

      var loading = loadingProp || this.state.isLoading;

      return _react2.default.createElement(
        Element,
        _extends({
          type: Element === 'button' ? 'button' : undefined
        }, rest, {
          className: (0, _classnames2.default)(className, _Button2.default.general, _Button2.default[mod], _Button2.default[size], mod !== 'icon' && _Button2.default[round], (_cn = {}, _defineProperty(_cn, _Button2.default.disabled, loading || disabled), _defineProperty(_cn, _Button2.default.loading, loading), _cn)),
          style: _extends({}, rest.style, width ? { width: width } : {}),
          disabled: loading || disabled,
          onClick: this.onClick
        }),
        icon,
        _react2.default.createElement(
          'div',
          { className: _Button2.default.alignLabel },
          children
        ),
        !disabled && !loading && _react2.default.createElement(_reactInk2.default, null)
      );
    }
  }]);

  return Button;
}(_react.PureComponent);

Button.propTypes = {
  mod: _propTypes2.default.string,
  round: _propTypes2.default.string,
  size: _propTypes2.default.string,
  children: _propTypes2.default.node,
  icon: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  width: _propTypes2.default.number,
  element: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  onClick: _propTypes2.default.func,
  smart: _propTypes2.default.bool
};

Button.defaultProps = {
  mod: 'secondary',
  element: 'button',
  round: 'small',
  onClick: function onClick() {}
};

exports.default = Button;