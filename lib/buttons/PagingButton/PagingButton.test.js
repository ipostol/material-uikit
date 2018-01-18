'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _PagingButton = require('./PagingButton');

var _PagingButton2 = _interopRequireDefault(_PagingButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PagingButton component', function () {

  it('should render correctly', function () {

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PagingButton2.default, { page: 1, active: true }));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly prev props', function () {

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PagingButton2.default, { prev: true }));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly next props', function () {

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PagingButton2.default, { next: true }));

    expect(wrapper).toMatchSnapshot();
  });
});