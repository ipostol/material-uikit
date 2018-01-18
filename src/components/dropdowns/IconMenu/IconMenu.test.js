import React from 'react';
import { shallow } from 'enzyme';
import IconMenu from './IconMenu';

describe('IconMenu component', () => {

  it('should render correctly', () => {

    const props = {
      options: [{ id: 1 }],
    };

    const wrapper = shallow(
      <IconMenu {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly children props', () => {

    const props = {
      children: <div />,
    };

    const wrapper = shallow(
      <IconMenu {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
