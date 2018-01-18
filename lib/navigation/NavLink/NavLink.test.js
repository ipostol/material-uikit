'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('NavLink component', function () {

  it('should render correctly', function () {

    var props = {};

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NavLink2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly to props', function () {

    var props = {
      to: '/'
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NavLink2.default, props));

    expect(wrapper).toMatchSnapshot();
  });
});