import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader component', () => {

  it('should render correctly loading', () => {

    const props = {
      status: 'loading',
      message: 'message',
    };

    const wrapper = shallow(
      <Loader {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly success', () => {

    const props = {
      status: 'success',
      message: 'message',
      right: true,
    };

    const wrapper = shallow(
      <Loader {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly error', () => {

    const props = {
      status: 'error',
    };

    const wrapper = shallow(
      <Loader {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
