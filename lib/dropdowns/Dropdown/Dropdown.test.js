'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Dropdown component', function () {

  it('should render correctly', function () {

    var props = {};

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Dropdown2.default, props));

    wrapper.setState({ isOpened: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly onRight, contentWidth props', function () {

    var props = {
      onRight: true,
      contentWidth: 100
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Dropdown2.default, props));

    wrapper.setState({ isOpened: true });

    expect(wrapper).toMatchSnapshot();
  });
});