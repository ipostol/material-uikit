import React from 'react';
import { shallow } from 'enzyme';
import Histogram from './Histogram';

describe('Histogram component', () => {

  it('should render correctly', () => {

    const props = {
      histogram: [0, 100, 0, 50],
    };

    const wrapper = shallow(
      <Histogram {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
