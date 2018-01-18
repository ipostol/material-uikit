import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../Checkbox';
import CheckList from './CheckList';

describe('CheckList component', () => {

  it('should render correctly', () => {

    const props = {
      options: [{ id: 1 }],
      value: [],
      onChange() {},
    };

    const wrapper = shallow(
      <CheckList {...props} />,
    );

    wrapper.find(Checkbox).simulate('change');

    expect(wrapper).toMatchSnapshot();

  });

});
