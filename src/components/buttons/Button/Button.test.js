import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {

  it('should render correctly', () => {

    const wrapper = shallow(
      <Button>Button</Button>,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
