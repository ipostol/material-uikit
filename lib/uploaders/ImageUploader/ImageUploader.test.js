'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ImageUploader = require('./ImageUploader');

var _ImageUploader2 = _interopRequireDefault(_ImageUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ImageUploader component', function () {

  it('should render correctly', function () {

    var props = {};

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ImageUploader2.default, props));

    wrapper.find('input').simulate('change', { target: { files: [] } });

    expect(wrapper).toMatchSnapshot();
  });
});