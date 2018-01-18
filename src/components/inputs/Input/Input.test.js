import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from './Input';

describe('Input component', () => {

  it('should render correctly', () => {

    const props = {};

    const wrapper = shallow(
      <Input {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly icon', () => {

    const props = {
      icon: <div />,
      error: 'error',
    };

    const wrapper = shallow(
      <Input {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should mount correctly', () => {

    const props = {
      icon: <div />,
      error: 'error',
      onBlur() {},
    };

    const wrapper = mount(
      <Input {...props} />,
    );

    wrapper.find('input').simulate('blur');

    expect(wrapper).toMatchSnapshot();

  });

});
