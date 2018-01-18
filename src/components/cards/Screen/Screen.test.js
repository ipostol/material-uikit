import React from 'react';
import { shallow } from 'enzyme';
import Screen from './Screen';

describe('Screen component', () => {

  it('should render correctly', () => {

    const props = {
      images: ['img'],
    };

    const wrapper = shallow(
      <Screen {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly many images', () => {

    const props = {
      images: ['img', 'img', 'img'],
    };

    const wrapper = shallow(
      <Screen {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
