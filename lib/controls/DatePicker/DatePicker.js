'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDayPicker = require('react-day-picker');

var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

require('react-day-picker/lib/style.css');

var _DatePicker = require('./DatePicker.scss');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isSelectingFirstDay = function isSelectingFirstDay(from, to, day) {

  var firstDayIsNotSelected = !from;
  var selectedDayIsBeforeFirstDay = from && _reactDayPicker.DateUtils.isDayBefore(day, from);
  var rangeIsSelected = from && to;

  return firstDayIsNotSelected || selectedDayIsBeforeFirstDay || rangeIsSelected;
};

var initialState = {
  from: null,
  to: null,
  enteredTo: null // Keep track of the last day for mouseEnter.
};

var DatePicker = function (_PureComponent) {
  _inherits(DatePicker, _PureComponent);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.onKeyDown = function (e) {

      if (e.keyCode === 27) {

        _this.reset();
      }
    };

    _this.handleDayClick = function (day) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          isRequired = _this$props.isRequired,
          isRange = _this$props.isRange;
      var _this$state = _this.state,
          from = _this$state.from,
          to = _this$state.to;


      if (!isRequired && _reactDayPicker.DateUtils.isSameDay(day, from)) {

        _this.reset();
      } else if (!isRange || isSelectingFirstDay(from, to, day)) {

        _this.setState({
          from: day,
          to: null,
          enteredTo: null
        });

        if (!isRange) {

          onChange(day);
        }
      } else {

        _this.setState({
          to: day,
          enteredTo: day
        }, function () {

          if (typeof onChange === 'function') {

            onChange([_this.state.from, _this.state.to]);
          }
        });
      }
    };

    _this.handleDayMouseEnter = function (day) {
      var isRange = _this.props.isRange;
      var _this$state2 = _this.state,
          from = _this$state2.from,
          to = _this$state2.to;


      if (isRange && !isSelectingFirstDay(from, to, day)) {

        _this.setState({
          enteredTo: day
        });
      }
    };

    _this.reset = function () {
      var onChange = _this.props.onChange;


      _this.setState(initialState);
      onChange(null);
    };

    _this.state = initialState;

    if (props.value) {

      if (props.isRange) {

        _this.state.from = new Date(props.value[0]);
        _this.state.to = new Date(props.value[1]);
        _this.state.enteredTo = new Date(props.value[1]);
      } else {

        _this.state.from = new Date(props.value);
      }
    }

    return _this;
  }

  _createClass(DatePicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          initialMonth = _props.initialMonth,
          disabledDays = _props.disabledDays,
          isRange = _props.isRange,
          month = _props.month;
      var _state = this.state,
          from = _state.from,
          to = _state.enteredTo;


      return _react2.default.createElement(_reactDayPicker2.default, {
        month: month,
        onKeyDown: this.onKeyDown,
        classNames: _DatePicker2.default,
        numberOfMonths: 2,
        selectedDays: isRange ? [from, { from: from, to: to }] : [from],
        disabledDays: disabledDays,
        initialMonth: initialMonth,
        onDayClick: this.handleDayClick,
        onDayMouseEnter: this.handleDayMouseEnter
      });
    }
  }]);

  return DatePicker;
}(_react.PureComponent);

DatePicker.propTypes = {
  value: _propTypes2.default.any,
  onChange: _propTypes2.default.func,
  isRange: _propTypes2.default.bool,
  isRequired: _propTypes2.default.bool,
  disabledDays: _propTypes2.default.object,
  initialMonth: _propTypes2.default.object,
  month: _propTypes2.default.object
};

DatePicker.defaultProps = {
  onChange: function onChange() {},

  disabledDays: {
    before: new Date()
  }
};

exports.default = DatePicker;