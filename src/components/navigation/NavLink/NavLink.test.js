import React from 'react';
import { shallow } from 'enzyme';
import NavLink from './NavLink';

describe('NavLink component', () => {

  it('should render correctly', () => {

    const props = {};

    const wrapper = shallow(
      <NavLink {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly to props', () => {

    const props = {
      to: '/',
    };

    const wrapper = shallow(
      <NavLink {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
