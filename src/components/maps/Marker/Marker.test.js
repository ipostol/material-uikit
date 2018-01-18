import React from 'react';
import { shallow } from 'enzyme';
import Marker from './Marker';

describe('Marker component', () => {

  it('should render correctly', () => {

    const props = {
      isVisited: true,
    };

    const wrapper = shallow(
      <Marker {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly timeslotsCount=2, $hover=true', () => {

    const props = {
      timeslotsCount: 2,
      $hover: true,
    };

    const wrapper = shallow(
      <Marker {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly isLoosing=true', () => {

    const props = {
      isLoosing: true,
    };

    const wrapper = shallow(
      <Marker {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('should render correctly isWinning=true', () => {

    const props = {
      isWinning: true,
    };

    const wrapper = shallow(
      <Marker {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
