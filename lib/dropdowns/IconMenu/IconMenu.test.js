'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _IconMenu = require('./IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('IconMenu component', function () {

  it('should render correctly', function () {

    var props = {
      options: [{ id: 1 }]
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_IconMenu2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly children props', function () {

    var props = {
      children: _react2.default.createElement('div', null)
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_IconMenu2.default, props));

    expect(wrapper).toMatchSnapshot();
  });
});