'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _PriceInput = require('./PriceInput');

var _PriceInput2 = _interopRequireDefault(_PriceInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PriceInput component', function () {

  it('should render correctly', function () {

    var props = {};

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PriceInput2.default, props));

    wrapper.node.props.onBlur({ target: { value: '' } });
    wrapper.node.props.onChange({ target: { value: '' } });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly value', function () {

    var props = {
      value: 10
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PriceInput2.default, props));

    wrapper.node.props.onBlur({ target: { value: '100000000000000000' } });
    wrapper.node.props.onChange({ target: { value: '10' } });

    expect(wrapper).toMatchSnapshot();
  });
});