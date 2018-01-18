import React from 'react';
import { shallow } from 'enzyme';
import Option from '../Option';
import Select from './Select';

describe('Select component', () => {

  it('should render correctly', () => {

    const props = {
      options: [{ id: 1, value: 'Option 1' }],
    };

    const wrapper = shallow(
      <Select {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly value props', () => {

    const props = {
      options: [{ id: 1, value: 'Option 1' }],
      value: 1,
    };

    const wrapper = shallow(
      <Select {...props} />,
    );

    wrapper.find(Option).simulate('click');

    expect(wrapper).toMatchSnapshot();

  });

});
