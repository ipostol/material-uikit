import React from 'react';
import Package from './Package';

export default () => (
  <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
    <Package
      cost="£4000"
      description="Description"
      places="Places"
      resolutions="Resolutions"
      images={['mhnzlkatwgr8nt0j88th', 'mhnzlkatwgr8nt0j88th', 'mhnzlkatwgr8nt0j88th']}
      header="Header"
      percent="95%"
    />
  </div>
);
