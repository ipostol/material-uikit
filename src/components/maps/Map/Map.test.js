import React from 'react';
import { shallow, mount } from 'enzyme';
import Map from './Map';

describe('Map component', () => {

  it('should render correctly', () => {

    const props = {};

    const wrapper = shallow(
      <Map {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

    mount(<Map {...props} />);

  });

});
