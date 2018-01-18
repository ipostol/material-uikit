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

var _Input = require('./Input.scss');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_PureComponent) {
  _inherits(Input, _PureComponent);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isFocused: false,
      clearedByFocus: false
    }, _this.onFocus = function (e) {
      var _this$props = _this.props,
          onFocus = _this$props.onFocus,
          onChange = _this$props.onChange,
          clearByFocus = _this$props.clearByFocus;


      _this.setState({ isFocused: true });

      if (clearByFocus && !_this.state.clearedByFocus) {

        _this.setState({ clearedByFocus: true });
        onChange(_extends({}, e, { target: _extends({}, e.target, { value: '' }) }));
      }

      onFocus(e);
    }, _this.onBlur = function (e) {
      var onBlur = _this.props.onBlur;


      _this.setState({ isFocused: false });

      onBlur(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _this2 = this,
          _cn;

      var _props = this.props,
          inputClassName = _props.inputClassName,
          className = _props.className,
          label = _props.label,
          error = _props.error,
          size = _props.size,
          icon = _props.icon,
          secondary = _props.secondary,
          disabled = _props.disabled,
          info = _props.info,
          optional = _props.optional,
          clearByFocus = _props.clearByFocus,
          rest = _objectWithoutProperties(_props, ['inputClassName', 'className', 'label', 'error', 'size', 'icon', 'secondary', 'disabled', 'info', 'optional', 'clearByFocus']);

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_Input2.default.inputWrap, className) },
        _react2.default.createElement(
          _Label2.default,
          {
            isFocused: this.state.isFocused,
            optional: optional,
            isError: error
          },
          label
        ),
        icon ? _react2.default.createElement(
          'div',
          { className: _Input2.default.icon },
          icon
        ) : null,
        _react2.default.createElement('input', _extends({
          ref: function ref(_ref2) {
            return _this2.input = _ref2;
          }
        }, rest, {
          onBlur: this.onBlur,
          onFocus: this.onFocus,
          disabled: disabled,
          className: (0, _classnames2.default)(_Input2.default.general, (_cn = {}, _defineProperty(_cn, _Input2.default.error, error), _defineProperty(_cn, _Input2.default.disabled, disabled), _defineProperty(_cn, _Input2.default.iconPadding, !!icon), _defineProperty(_cn, _Input2.default.secondary, secondary), _cn), inputClassName, _Input2.default[size])
        })),
        error && _react2.default.createElement(
          'div',
          { className: _Input2.default.warning },
          error
        ),
        info && _react2.default.createElement(
          'div',
          { className: _Input2.default.info },
          info
        )
      );
    }
  }]);

  return Input;
}(_react.PureComponent);

Input.propTypes = {
  size: _propTypes2.default.string,
  label: _propTypes2.default.string,
  optional: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  inputClassName: _propTypes2.default.string,
  error: _propTypes2.default.node,
  secondary: _propTypes2.default.bool,
  icon: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  info: _propTypes2.default.string,
  clearByFocus: _propTypes2.default.bool
};

Input.defaultProps = {
  type: 'text',
  size: 'l',
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {}
};

exports.default = Input;