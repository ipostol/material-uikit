'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Info = require('./Info');

var _Info2 = _interopRequireDefault(_Info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Info component', function () {

  it('should render correctly', function () {

    var props = {
      looping: 'looping'
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Info2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly timeslotsCount=2', function () {

    var props = {
      timeslotsCount: 2
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Info2.default, props));

    expect(wrapper).toMatchSnapshot();
  });
});