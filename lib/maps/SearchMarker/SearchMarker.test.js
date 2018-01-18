'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SearchMarker = require('./SearchMarker');

var _SearchMarker2 = _interopRequireDefault(_SearchMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SearchMarker component', function () {

  it('should render correctly', function () {

    var props = {};

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SearchMarker2.default, props));

    expect(wrapper).toMatchSnapshot();
  });
});