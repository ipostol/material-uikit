'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _utils = require('google-map-react/utils');

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _SearchMarker = require('../SearchMarker');

var _SearchMarker2 = _interopRequireDefault(_SearchMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapOptions = {
  minZoom: 6,
  maxZoom: 19,
  scrollwheel: false
};

var styles = {
  width: '100%',
  height: '100%',
  position: 'relative'
};

var londonBorder = [51.769042247410624, -0.6347225635601887, 51.21154194283588, 0.38151278800231125];

var Map = function (_PureComponent) {
  _inherits(Map, _PureComponent);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    _this.onChange = function (_ref) {
      var _ref$bounds = _ref.bounds,
          nw = _ref$bounds.nw,
          se = _ref$bounds.se,
          center = _ref.center,
          zoom = _ref.zoom;
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          calls = _this$state.calls,
          timeout = _this$state.timeout;


      calls.push({ nw: nw, se: se });

      if (!timeout) {

        _this.state.timeout = setTimeout(function () {
          var _calls = calls[calls.length - 1],
              nw2 = _calls.nw,
              se2 = _calls.se;


          _this.setState({
            center: center,
            zoom: zoom,
            coordinates: [nw2.lat, nw2.lng, se2.lat, se2.lng]
          }, function () {

            if (_this.state.isFirstCall) {

              _this.state.isFirstCall = false;
            } else {

              onChange([nw2.lat, nw2.lng, se2.lat, se2.lng]);
            }
          });

          _this.state.timeout = null;
          _this.state.calls = [];
        }, 200);
      }
    };

    _this.changeByCoordinates = function (coordinates) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          maxZoom = _ref2.maxZoom;

      if (coordinates && coordinates[0] === coordinates[2] && coordinates[1] === coordinates[3]) {

        _this.setState({
          center: {
            lat: coordinates[0],
            lng: coordinates[1]
          },
          zoom: 15
        });
      } else {
        var _this$fitBounds = _this.fitBounds(coordinates || londonBorder),
            center = _this$fitBounds.center,
            zoom = _this$fitBounds.zoom;

        _this.setState({
          center: center,
          zoom: maxZoom ? Math.min(maxZoom, zoom) : zoom,
          coordinates: coordinates
        });
      }
    };

    _this.state = {
      center: props.center,
      place: props.location,
      map: {
        offsetWidth: 1000,
        offsetHeight: 1000
      },
      coordinates: props.coordinates,
      zoom: props.zoom,
      //
      calls: [],
      timeout: null,
      isFirstCall: true,
      defaultCoordinates: props.coordinates
    };

    return _this;
  }

  /**
   * waiting map loaded and tigger calculate coordinates, center, zoom for show actualy data
   */


  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var coordinates = this.props.coordinates;


      this.state.map = this.map;
      if (!this.state.center) this.changeByCoordinates(coordinates);
    }

    /**
     * @param {object} nextProps
     * listen receiveProps update for change map properties by new coordinates
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          location = _props.location,
          coordinates = _props.coordinates;


      if (location !== nextProps.location) {

        this.setState({
          place: nextProps.location
        });
      }

      // change coordinates without onChange method
      if (!(0, _deepEqual2.default)(this.state.coordinates, nextProps.coordinates) && !(0, _deepEqual2.default)(coordinates, nextProps.coordinates)) {

        this.changeByCoordinates(nextProps.coordinates);
      }

      // prevent useles change call, when return to defaultCoordinates
      // (course defaultCoordinates is approximate)
      if ((0, _deepEqual2.default)(nextProps.coordinates, this.state.defaultCoordinates) && !(0, _deepEqual2.default)(coordinates, nextProps.coordinates)) {

        this.state.isFirstCall = true;
      }
    }

    /**
     * trigger when GoogleMap tigger onChange callback
     * if api/map loaded accumulate calls, and use last after 200ms
     * if api/map not loaded set initBouds for customize coordinates
     */


    /**
     * change map params by coordinates
     * @param {number[]} coordinates
     * @param {{ maxZoom: number }}
     */

  }, {
    key: 'fitBounds',


    /**
     * calculate map properties by coordinates
     * @param {number[]|object} coordinates
     * @return {object}
     */
    value: function fitBounds(coordinates) {

      var bounds = {
        nw: {
          lat: coordinates[0],
          lng: coordinates[1]
        },
        se: {
          lat: coordinates[2],
          lng: coordinates[3]
        }
      };

      var _state$map = this.state.map,
          offsetWidth = _state$map.offsetWidth,
          offsetHeight = _state$map.offsetHeight;


      var size = {
        width: offsetWidth,
        height: offsetHeight
      };

      return (0, _utils.fitBounds)(bounds, size);
    }

    /**
     * make markers (any tipes, clustering) by props
     * @return {ReactMarkup[]}
     */

  }, {
    key: 'markers',
    value: function markers() {
      var markers = this.props.markers;
      var place = this.state.place;


      var list = [].concat(_toConsumableArray(markers));

      if (place) {
        var _place = _slicedToArray(place, 2),
            lat = _place[0],
            lng = _place[1];

        list.unshift(_react2.default.createElement(_SearchMarker2.default, {
          key: 'search',
          lat: lat,
          lng: lng
        }));
      }

      return list;
    }

    /**
     * @return {ReactElement}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { style: styles, ref: function ref(c) {
            return _this2.map = c;
          } },
        _react2.default.createElement(
          _googleMapReact2.default,
          {
            onChange: this.onChange,
            center: this.state.center,
            zoom: this.state.zoom,
            hoverDistance: 100,
            bootstrapURLKeys: {
              key: 'AIzaSyAAFXTWAvZDjwWtFHa7sdW_-D42WVob39Q',
              language: 'en',
              libraries: 'places'
            },
            options: mapOptions,
            yesIWantToUseGoogleMapApiInternals: true
          },
          this.markers()
        )
      );
    }
  }]);

  return Map;
}(_react.PureComponent);

Map.propTypes = {
  center: _propTypes2.default.any,
  zoom: _propTypes2.default.number,
  coordinates: _propTypes2.default.arrayOf(_propTypes2.default.number),
  onChange: _propTypes2.default.func,
  location: _propTypes2.default.array,
  markers: _propTypes2.default.array
};

Map.defaultProps = {
  markers: [],
  onChange: function onChange() {}
};

exports.default = Map;