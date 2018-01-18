import React from 'react';
import { shallow } from 'enzyme';
import ImageUploader from './ImageUploader';

describe('ImageUploader component', () => {

  it('should render correctly', () => {

    const props = {};

    const wrapper = shallow(
      <ImageUploader {...props} />,
    );

    wrapper.find('input').simulate('change', { target: { files: [] } });

    expect(wrapper).toMatchSnapshot();

  });

});
