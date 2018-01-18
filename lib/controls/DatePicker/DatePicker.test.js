'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _reactDayPicker = require('react-day-picker');

var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DatePicker component', function () {

  it('should render correctly', function () {

    var props = {
      value: [new Date('10-10-2010'), new Date('10-20-2010')],
      onChange: function onChange() {},

      before: new Date('08-10-2010')
    };

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DatePicker2.default, props));

    wrapper.find(_reactDayPicker2.default).get(0).props.onDayClick(new Date('10-10-2010'));
    wrapper.find(_reactDayPicker2.default).get(0).props.onDayClick(new Date('10-11-2010'));
    wrapper.find(_reactDayPicker2.default).get(0).props.onDayClick(new Date('10-22-2010'));
    wrapper.find(_reactDayPicker2.default).get(0).props.onKeyDown({ keyCode: 27 });

    wrapper.setState({
      to: null
    });

    wrapper.find(_reactDayPicker2.default).get(0).props.onDayMouseEnter(new Date('10-22-2010'));

    // expect(wrapper).toMatchSnapshot();
  });
});