import React from 'react';
import { shallow } from 'enzyme';
import Package from './Package';

describe('Package component', () => {

  it('should render correctly', () => {

    const props = {};

    const wrapper = shallow(
      <Package {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
