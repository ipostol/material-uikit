'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Marker = require('./Marker');

var _Marker2 = _interopRequireDefault(_Marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Marker component', function () {

  it('should render correctly', function () {

    var props = {
      isVisited: true
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Marker2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly timeslotsCount=2, $hover=true', function () {

    var props = {
      timeslotsCount: 2,
      $hover: true
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Marker2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly isLoosing=true', function () {

    var props = {
      isLoosing: true
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Marker2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly isWinning=true', function () {

    var props = {
      isWinning: true
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Marker2.default, props));

    expect(wrapper).toMatchSnapshot();
  });
});