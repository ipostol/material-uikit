'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckList = require('./CheckList');

var _CheckList2 = _interopRequireDefault(_CheckList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CheckList component', function () {

  it('should render correctly', function () {

    var props = {
      options: [{ id: 1 }],
      value: [],
      onChange: function onChange() {}
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CheckList2.default, props));

    wrapper.find(_Checkbox2.default).simulate('change');

    expect(wrapper).toMatchSnapshot();
  });
});