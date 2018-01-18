'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Option = require('../Option');

var _Option2 = _interopRequireDefault(_Option);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Select component', function () {

  it('should render correctly', function () {

    var props = {
      options: [{ id: 1, value: 'Option 1' }]
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Select2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly value props', function () {

    var props = {
      options: [{ id: 1, value: 'Option 1' }],
      value: 1
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Select2.default, props));

    wrapper.find(_Option2.default).simulate('click');

    expect(wrapper).toMatchSnapshot();
  });
});