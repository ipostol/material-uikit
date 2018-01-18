'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tabs component', function () {

  it('should render correctly', function () {

    var props = {
      tabs: [{ id: 1 }],
      onChange: function onChange() {}
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Tabs2.default, props));

    wrapper.find('div.tab').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });
});