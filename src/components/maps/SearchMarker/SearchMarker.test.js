import React from 'react';
import { shallow } from 'enzyme';
import SearchMarker from './SearchMarker';

describe('SearchMarker component', () => {

  it('should render correctly', () => {

    const props = {};

    const wrapper = shallow(
      <SearchMarker {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
