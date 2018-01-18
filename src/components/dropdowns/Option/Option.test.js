import React from 'react';
import { shallow } from 'enzyme';
import Option from './Option';

describe('Option component', () => {

  it('should render correctly', () => {

    const props = {};

    const wrapper = shallow(
      <Option {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly icon props', () => {

    const props = {
      icon: <div />,
    };

    const wrapper = shallow(
      <Option {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
