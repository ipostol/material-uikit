import React from 'react';
import { shallow } from 'enzyme';
import Info from './Info';

describe('Info component', () => {

  it('should render correctly', () => {

    const props = {
      looping: 'looping',
    };

    const wrapper = shallow(
      <Info {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly timeslotsCount=2', () => {

    const props = {
      timeslotsCount: 2,
    };

    const wrapper = shallow(
      <Info {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
