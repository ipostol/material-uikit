import React from 'react';
import { Skin } from 'react-markup-components';
import Info from './Info';

export default () => (
  <Skin>
    <Info
      timeslotsCount={3}
      minPrice={123}
      maxPrice={321}
      typeIcon="wj0hwqmnqnzj9qgvbisy"
      typeName="Digital Billboard"
      resolution="15x50"
      looping="30s, 30m, 10m, 10m, 30s, 30m, 10m, 10m"
      place="Gregg Point"
    />
  </Skin>
);
