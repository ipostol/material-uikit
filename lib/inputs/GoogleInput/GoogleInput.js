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

var _reactPlacesAutocomplete = require('react-places-autocomplete');

var _reactPlacesAutocomplete2 = _interopRequireDefault(_reactPlacesAutocomplete);

var _PlaceStroke = require('../../icons/PlaceStroke');

var _PlaceStroke2 = _interopRequireDefault(_PlaceStroke);

var _GoogleInput = require('./GoogleInput.scss');

var _GoogleInput2 = _interopRequireDefault(_GoogleInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleInput = function (_PureComponent) {
  _inherits(GoogleInput, _PureComponent);

  function GoogleInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoogleInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoogleInput.__proto__ || Object.getPrototypeOf(GoogleInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ''
    }, _this.onChange = function (value) {
      return _this.setState({ value: value });
    }, _this.select = function (name, id) {
      var onLocationChange = _this.props.onLocationChange;


      onLocationChange({ name: name, id: id });
      _this.setState({ value: '' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoogleInput, [{
    key: 'render',
    value: function render() {

      var inlineStyles = {
        autocompleteContainer: {
          backgroundColor: 'white',
          borderRadius: '4px',
          boxShadow: '0 0 8px 0 rgba(53, 68, 126, 0.05), 0 4px 8px 0 rgba(53, 68, 126, 0.09)',
          border: 'none',
          marginTop: '4px',
          paddingTop: '4px',
          paddingBottom: '4px',
          zIndex: '9'
        }
      };

      var _props = this.props,
          onLocationChange = _props.onLocationChange,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ['onLocationChange', 'className']);

      var AutocompleteItem = function AutocompleteItem(_ref2) {
        var formattedSuggestion = _ref2.formattedSuggestion;
        return _react2.default.createElement(
          'div',
          { style: { display: 'flex', alignItems: 'center', height: '40px' } },
          _react2.default.createElement(_PlaceStroke2.default, { style: { marginRight: '16px', display: 'inline-block' } }),
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'strong',
              { style: { fontSize: '14px' } },
              formattedSuggestion.mainText
            ),
            ' ',
            _react2.default.createElement(
              'small',
              {
                style: {
                  color: '#9499b0',
                  fontSize: '13px'
                }
              },
              formattedSuggestion.secondaryText
            )
          )
        );
      };

      return _react2.default.createElement(_reactPlacesAutocomplete2.default, {
        inputProps: _extends({}, rest, { value: this.state.value, onChange: this.onChange }),
        onSelect: this.select,
        styles: inlineStyles,
        highlightFirstSuggestion: true,
        autocompleteItem: AutocompleteItem,
        googleLogo: false,
        classNames: { input: (0, _classnames2.default)(_GoogleInput2.default.input, className) }
      });
    }
  }]);

  return GoogleInput;
}(_react.PureComponent);

GoogleInput.propTypes = {
  onLocationChange: _propTypes2.default.func,
  className: _propTypes2.default.string
};

exports.default = GoogleInput;