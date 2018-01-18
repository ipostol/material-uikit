'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Package = require('./Package');

var _Package2 = _interopRequireDefault(_Package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Package component', function () {

  it('should render correctly', function () {

    var props = {};

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Package2.default, props));

    expect(wrapper).toMatchSnapshot();
  });
});