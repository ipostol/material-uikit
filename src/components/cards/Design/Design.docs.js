import React from 'react';
import Design from './Design';

const design = {
  public_id: 'banner-2-x_trvx4y',
  height: 60,
};

export default () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
    <div style={{ width: '20px' }} />
    <Design size="l" design={design} />
  </div>
);
