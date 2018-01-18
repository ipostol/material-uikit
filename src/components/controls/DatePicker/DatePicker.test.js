import React from 'react';
import { mount } from 'enzyme';
import RDayPicker from 'react-day-picker';
import DatePicker from './DatePicker';

describe('DatePicker component', () => {

  it('should render correctly', () => {

    const props = {
      value: [new Date('10-10-2010'), new Date('10-20-2010')],
      onChange() {},
      before: new Date('08-10-2010'),
    };

    const wrapper = mount(
      <DatePicker {...props} />,
    );

    wrapper.find(RDayPicker).get(0).props.onDayClick(new Date('10-10-2010'));
    wrapper.find(RDayPicker).get(0).props.onDayClick(new Date('10-11-2010'));
    wrapper.find(RDayPicker).get(0).props.onDayClick(new Date('10-22-2010'));
    wrapper.find(RDayPicker).get(0).props.onKeyDown({ keyCode: 27 });

    wrapper.setState({
      to: null,
    });

    wrapper.find(RDayPicker).get(0).props.onDayMouseEnter(new Date('10-22-2010'));

    // expect(wrapper).toMatchSnapshot();

  });

});
