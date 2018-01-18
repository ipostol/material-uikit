'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Input component', function () {

  it('should render correctly', function () {

    var props = {};

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly icon', function () {

    var props = {
      icon: _react2.default.createElement('div', null),
      error: 'error'
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should mount correctly', function () {

    var props = {
      icon: _react2.default.createElement('div', null),
      error: 'error',
      onBlur: function onBlur() {}
    };

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Input2.default, props));

    wrapper.find('input').simulate('blur');

    expect(wrapper).toMatchSnapshot();
  });
});