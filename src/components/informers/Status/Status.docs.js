import React from 'react';
import Status from './Status';

export default () => (
  <div style={{ height: '100%', marginLeft: '400px' }}>
    <Status status="pending" />
    <Status status="approved" />
    <Status status="rejected" />
  </div>
);
