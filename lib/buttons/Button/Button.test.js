'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Button component', function () {

  it('should render correctly', function () {

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Button2.default,
      null,
      'Button'
    ));

    expect(wrapper).toMatchSnapshot();
  });
});