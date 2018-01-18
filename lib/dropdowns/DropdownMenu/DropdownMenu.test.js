'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Option = require('../Option');

var _Option2 = _interopRequireDefault(_Option);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DropdownMenu component', function () {

  it('should render correctly', function () {

    var props = {
      options: [{ id: 1 }]
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DropdownMenu2.default, props));

    wrapper.find(_Option2.default).simulate('click');

    expect(wrapper).toMatchSnapshot();
  });
});