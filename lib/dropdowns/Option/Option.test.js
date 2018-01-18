'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Option component', function () {

  it('should render correctly', function () {

    var props = {};

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Option2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly icon props', function () {

    var props = {
      icon: _react2.default.createElement('div', null)
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Option2.default, props));

    expect(wrapper).toMatchSnapshot();
  });
});