import React from 'react';
import Screen from './Screen';

export default () => (
  <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
    <Screen
      cost="£4000"
      description="Description"
      places="Places"
      resolutions="Resolutions"
      images={['mhnzlkatwgr8nt0j88th']}
    />
  </div>
);
