'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hotTime = 30;

var TimeLeft = function (_PureComponent) {
  _inherits(TimeLeft, _PureComponent);

  function TimeLeft() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimeLeft);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimeLeft.__proto__ || Object.getPrototypeOf(TimeLeft)).call.apply(_ref, [this].concat(args))), _this), _this.timeoutId = 0, _this.hot = false, _this.firstRun = false, _this.tick = function (refresh) {

      if (!_this.props.live) {

        return;
      }

      var period = 1000;

      var then = new Date(_this.props.date).valueOf();
      var now = Date.now();
      var seconds = Math.round(Math.abs(now - then) / 1000);

      if (_this.props.format === 'short') {

        if (seconds < 60) {

          period = 1000;
        } else if (seconds < 60 * 60) {

          period = 1000;
        } else if (seconds < 60 * 60 * 24) {

          period = 1000 * 60;
        } else {

          period = 1000 * 60 * 10;
        }
      }

      if (now >= then) {

        _this.props.finish();
      }

      if ((now >= then || seconds > hotTime * 60) && _this.hot === true) {

        _this.props.hotBidFunc(false);
        _this.hot = false;
      } else if (now < then && seconds < hotTime * 60 && _this.hot === false) {

        _this.props.hotBidFunc(true);
        _this.hot = true;
      }

      period = Math.min(Math.max(period, _this.props.minPeriod), _this.props.maxPeriod);

      if (!_this.firstRun) period = 10;
      if (period) {

        _this.timeoutId = setTimeout(_this.tick, period);
      }

      _this.firstRun = true;

      if (!refresh) {

        _this.forceUpdate();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimeLeft, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      if (this.props.live) {

        this.tick(true);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {

      if (this.props.live !== lastProps.live || this.props.date !== lastProps.date) {

        if (!this.props.live && this.timeoutId) {

          clearTimeout(this.timeoutId);
          this.timeoutId = undefined;
        }
        this.tick();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }, {
    key: 'render',
    value: function render() {

      var then = new Date(this.props.date).valueOf();
      var now = Date.now();
      var seconds = Math.round(Math.abs(now - then) / 1000);
      var formatter = void 0;

      switch (this.props.format) {
        case 'simple':
          formatter = this.props.calcSimple(then, now, seconds, this.firstRun);
          break;
        case 'long':
          formatter = this.props.calcLong(then, now, seconds, this.firstRun);
          break;
        case 'short':
          formatter = this.props.calcShort(then, now, seconds, this.firstRun);
          break;
        default:
          formatter = this.props.calcShort(then, now, seconds, this.firstRun);
          break;
      }

      var props = { style: this.props.style, className: this.props.className };

      return _react2.default.createElement(this.props.component, props, formatter);
    }
  }]);

  return TimeLeft;
}(_react.PureComponent);

TimeLeft.propTypes = {
  live: _propTypes2.default.bool.isRequired,
  minPeriod: _propTypes2.default.number.isRequired,
  maxPeriod: _propTypes2.default.number.isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  calcSimple: _propTypes2.default.func.isRequired,
  calcShort: _propTypes2.default.func.isRequired,
  calcLong: _propTypes2.default.func.isRequired,
  hotBidFunc: _propTypes2.default.func.isRequired,
  finish: _propTypes2.default.func,
  format: _propTypes2.default.string.isRequired, // 'short' or 'long'
  date: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.instanceOf(Date)]).isRequired
};
TimeLeft.defaultProps = {
  live: true,
  finish: function finish() {},

  component: 'span',
  minPeriod: 0,
  strongStyle: null,
  secondsStyle: null,
  maxPeriod: Infinity,
  format: 'simple',
  hotBidFunc: function hotBid() {},
  formatterShort: function fos(value, unit, value2, unit2, suffix, firstRun) {
    var isSimple = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;


    var lunit = unit;
    var lunit2 = unit2;
    if (value !== 1 && unit !== 's' && unit !== 'min' && unit !== 'm' && unit !== 'h') {

      lunit += 's';
    }
    if (value2 !== 1 && unit2 !== 's' && unit2 !== 'min' && unit2 !== 'm') {

      lunit2 += 's';
    }
    if (firstRun) {

      var valunit2 = value2 > 0 ? '' + value2 + (isSimple ? '' : ' ') + lunit2 + ' ' : '';
      return '' + value + (isSimple ? '' : ' ') + lunit + ' ' + valunit2 + suffix;
    }
    return false;
  },
  calcSimple: function cs(then, now, seconds, firstRun) {

    var suffix = then < now ? 'ago' : '';

    var value = void 0;
    var unit = void 0;
    var value2 = void 0;
    var unit2 = void 0;

    if (seconds < 60) {

      value = Math.floor(seconds);
      unit = 's';
      value2 = '';
      unit2 = '';
    } else if (seconds < 60 * 60) {

      value = Math.floor(seconds / 60);
      unit = 'm';
      value2 = Math.round((seconds / 60 - value) * 60);
      if (value2 === 60) value2 = 0;
      unit2 = 's';
    } else if (seconds < 60 * 60 * 24) {

      value = Math.floor(seconds / (60 * 60));
      unit = 'h';
      value2 = Math.round((seconds / (60 * 60) - value) * 60);
      if (value2 === 60) value2 = 0;
      unit2 = 'm';
    } else if (seconds < 60 * 60 * 24 * 7) {

      value = Math.floor(seconds / (60 * 60 * 24));
      unit = 'day';
      value2 = Math.round((seconds / (60 * 60 * 24) - value) * 24);
      if (value2 === 24) value2 = 0;
      unit2 = 'hr';
    } else if (seconds < 60 * 60 * 24 * 30) {

      value = Math.floor(seconds / (60 * 60 * 24 * 7));
      unit = 'week';
      value2 = Math.round((seconds / (60 * 60 * 24 * 7) - value) * 7);
      if (value2 === 7) value2 = 0;
      unit2 = 'day';
    } else if (seconds < 60 * 60 * 24 * 365) {

      value = Math.floor(seconds / (60 * 60 * 24 * 30));
      unit = 'month';
      value2 = Math.round((seconds / (60 * 60 * 24 * 30) - value) * 30);
      unit2 = 'day';
    } else {

      value = Math.floor(seconds / (60 * 60 * 24 * 365));
      unit = 'year';
      value2 = Math.round((seconds / (60 * 60 * 24 * 365) - value) * (365 / 30));
      if (value2 === 12) value2 = 0;
      unit2 = 'month';
    }

    return this.formatterShort(value, unit, value2, unit2, suffix, firstRun, true);
  },
  calcShort: function cs(then, now, seconds, firstRun) {

    var suffix = then < now ? 'ago' : 'left';

    var value = void 0;
    var unit = void 0;
    var value2 = void 0;
    var unit2 = void 0;

    if (seconds < 60) {

      value = Math.floor(seconds);
      unit = 's';
      value2 = '';
      unit2 = '';
    } else if (seconds < 60 * 60) {

      value = Math.floor(seconds / 60);
      unit = 'min';
      value2 = Math.round((seconds / 60 - value) * 60);
      if (value2 === 60) value2 = 0;
      unit2 = 's';
    } else if (seconds < 60 * 60 * 24) {

      value = Math.floor(seconds / (60 * 60));
      unit = 'hr';
      value2 = Math.round((seconds / (60 * 60) - value) * 60);
      if (value2 === 60) value2 = 0;
      unit2 = 'min';
    } else if (seconds < 60 * 60 * 24 * 7) {

      value = Math.floor(seconds / (60 * 60 * 24));
      unit = 'day';
      value2 = Math.round((seconds / (60 * 60 * 24) - value) * 24);
      if (value2 === 24) value2 = 0;
      unit2 = 'hr';
    } else if (seconds < 60 * 60 * 24 * 30) {

      value = Math.floor(seconds / (60 * 60 * 24 * 7));
      unit = 'week';
      value2 = Math.round((seconds / (60 * 60 * 24 * 7) - value) * 7);
      if (value2 === 7) value2 = 0;
      unit2 = 'day';
    } else if (seconds < 60 * 60 * 24 * 365) {

      value = Math.floor(seconds / (60 * 60 * 24 * 30));
      unit = 'month';
      value2 = Math.round((seconds / (60 * 60 * 24 * 30) - value) * 30);
      unit2 = 'day';
    } else {

      value = Math.floor(seconds / (60 * 60 * 24 * 365));
      unit = 'year';
      value2 = Math.round((seconds / (60 * 60 * 24 * 365) - value) * (365 / 30));
      if (value2 === 12) value2 = 0;
      unit2 = 'month';
    }

    return this.formatterShort(value, unit, value2, unit2, suffix, firstRun);
  },
  calcLong: function cs(then, now, seconds, firstRun) {

    var suffix = then < now ? _react2.default.createElement(
      'span',
      null,
      ' ago'
    ) : null;
    var secondsNode = null;
    var minutesNode = null;
    var hoursNode = null;
    var daysNode = null;
    var monthsNode = null;
    var yearsNode = null;
    if (seconds < 2592000) {

      secondsNode = _react2.default.createElement(
        'span',
        { style: this.secondsStyle },
        _react2.default.createElement(
          'span',
          { style: this.strongStyle },
          ('0' + seconds % 60).slice(-2)
        ),
        'second' + (seconds > 1 ? 's ' : ' ')
      );
    }
    if (seconds > 60) {

      var minutes = Math.floor(seconds % 3600 / 60);
      minutesNode = _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          { style: this.strongStyle },
          minutes
        ),
        'minute' + (minutes > 1 ? 's ' : ' ')
      );
      if (seconds > 3600) {

        var hours = Math.floor(seconds % 86400 / 3600);
        hoursNode = _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'span',
            { style: this.strongStyle },
            hours
          ),
          'hour' + (hours > 1 ? 's ' : ' ')
        );
        if (seconds > 86400) {

          var days = Math.floor(seconds % 2592000 / 86400);
          daysNode = _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'span',
              { style: this.strongStyle },
              days
            ),
            'day' + (days > 1 ? 's ' : ' ')
          );
          if (seconds > 2592000) {

            var months = Math.floor(seconds % 31104000 / 2592000);
            monthsNode = _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(
                'span',
                { style: this.strongStyle },
                months
              ),
              'month' + (months > 1 ? 's ' : ' ')
            );
            if (seconds > 31536000) {

              var year = Math.floor(seconds / 31536000);
              yearsNode = _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  'span',
                  { style: this.strongStyle },
                  year
                ),
                'year' + (year > 1 ? 's ' : ' ')
              );
            }
          }
        }
      }
    }

    if (firstRun) {

      return _react2.default.createElement(
        'span',
        null,
        yearsNode,
        ' ',
        monthsNode,
        ' ',
        daysNode,
        ' ',
        hoursNode,
        ' ',
        minutesNode,
        ' ',
        secondsNode,
        ' ',
        suffix
      );
    }
    return false;
  }
};
exports.default = TimeLeft;