import React from 'react';
import { shallow } from 'enzyme';
import Dialog from './Dialog';

describe('Dialog component', () => {

  it('should render correctly', () => {

    const props = {};

    const wrapper = shallow(
      <Dialog {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
