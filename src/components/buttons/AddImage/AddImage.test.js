import React from 'react';
import { shallow } from 'enzyme';
import AddImage from './AddImage';

describe('AddImage component', () => {

  it('should render correctly', () => {

    const wrapper = shallow(
      <AddImage>AddImage</AddImage>,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
