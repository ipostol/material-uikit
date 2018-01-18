import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';
import PriceInput from './PriceInput';

describe('PriceInput component', () => {

  it('should render correctly', () => {

    const props = {};

    const wrapper = shallow(
      <PriceInput {...props} />,
    );

    wrapper.node.props.onBlur({ target: { value: '' } });
    wrapper.node.props.onChange({ target: { value: '' } });

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly value', () => {

    const props = {
      value: 10,
    };

    const wrapper = shallow(
      <PriceInput {...props} />,
    );

    wrapper.node.props.onBlur({ target: { value: '100000000000000000' } });
    wrapper.node.props.onChange({ target: { value: '10' } });

    expect(wrapper).toMatchSnapshot();

  });

});
