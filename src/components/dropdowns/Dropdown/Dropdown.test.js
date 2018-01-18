import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

describe('Dropdown component', () => {

  it('should render correctly', () => {

    const props = {};

    const wrapper = shallow(
      <Dropdown {...props} />,
    );

    wrapper.setState({ isOpened: true });

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly onRight, contentWidth props', () => {

    const props = {
      onRight: true,
      contentWidth: 100,
    };

    const wrapper = shallow(
      <Dropdown {...props} />,
    );

    wrapper.setState({ isOpened: true });

    expect(wrapper).toMatchSnapshot();

  });

});
