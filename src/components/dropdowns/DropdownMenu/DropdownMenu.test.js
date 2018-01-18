import React from 'react';
import { shallow } from 'enzyme';
import Option from '../Option';
import DropdownMenu from './DropdownMenu';

describe('DropdownMenu component', () => {

  it('should render correctly', () => {

    const props = {
      options: [{ id: 1 }],
    };

    const wrapper = shallow(
      <DropdownMenu {...props} />,
    );

    wrapper.find(Option).simulate('click');

    expect(wrapper).toMatchSnapshot();

  });

});
