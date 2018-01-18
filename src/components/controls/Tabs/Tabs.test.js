import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './Tabs';

describe('Tabs component', () => {

  it('should render correctly', () => {

    const props = {
      tabs: [{ id: 1 }],
      onChange() {},
    };

    const wrapper = shallow(
      <Tabs {...props} />,
    );

    wrapper.find('div.tab').simulate('click');

    expect(wrapper).toMatchSnapshot();

  });

});
