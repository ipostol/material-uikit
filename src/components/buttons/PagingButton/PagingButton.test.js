import React from 'react';
import { shallow } from 'enzyme';
import PagingButton from './PagingButton';

describe('PagingButton component', () => {

  it('should render correctly', () => {

    const wrapper = shallow(
      <PagingButton page={1} active />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly prev props', () => {

    const wrapper = shallow(
      <PagingButton prev />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly next props', () => {

    const wrapper = shallow(
      <PagingButton next />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
