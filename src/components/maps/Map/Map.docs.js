import React from 'react';
import Map from './Map';

export default () => (
  <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
    <Map location={[51.5, 0]} />
  </div>
);
