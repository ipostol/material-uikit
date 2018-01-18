'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Histogram = require('./Histogram');

var _Histogram2 = _interopRequireDefault(_Histogram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Histogram component', function () {

  it('should render correctly', function () {

    var props = {
      histogram: [0, 100, 0, 50]
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Histogram2.default, props));

    expect(wrapper).toMatchSnapshot();
  });
});