'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Screen = require('./Screen');

var _Screen2 = _interopRequireDefault(_Screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Screen component', function () {

  it('should render correctly', function () {

    var props = {
      images: ['img']
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Screen2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly many images', function () {

    var props = {
      images: ['img', 'img', 'img']
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Screen2.default, props));

    expect(wrapper).toMatchSnapshot();
  });
});