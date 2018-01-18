'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _AddImage = require('./AddImage');

var _AddImage2 = _interopRequireDefault(_AddImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AddImage component', function () {

  it('should render correctly', function () {

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _AddImage2.default,
      null,
      'AddImage'
    ));

    expect(wrapper).toMatchSnapshot();
  });
});