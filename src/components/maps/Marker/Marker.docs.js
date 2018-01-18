import React from 'react';
import { Skin } from 'react-markup-components';
import Marker from './Marker';

const timeslot = {
  id: 1,
  current_bid: 123.32,
  looping: '15m',
  'watching?': true,
  start: new Date().getTime(),
  end: new Date().getTime() + 1000000,
};

export default () => (
  <Skin>
    <Marker
      timeslotsCount={3}
      minPrice={123}
      maxPrice={321}
      typeIcon={null}
      typeName="Digital Billboard"
      size="1920x1080"
      place="Some place name"
      looping="30s, 30m, 10m, 10m, 30s, 30m, 10m, 10m"
    />
  </Skin>
);
