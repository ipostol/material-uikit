'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Loader component', function () {

  it('should render correctly loading', function () {

    var props = {
      status: 'loading',
      message: 'message'
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loader2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly success', function () {

    var props = {
      status: 'success',
      message: 'message',
      right: true
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loader2.default, props));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly error', function () {

    var props = {
      status: 'error'
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loader2.default, props));

    expect(wrapper).toMatchSnapshot();
  });
});