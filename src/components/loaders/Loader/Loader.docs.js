import React from 'react';
import Loader from './Loader';

export default () => (
  <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <Loader status="loading" />
    <Loader status="success" />
    <Loader status="error" />
    <Loader status="error" message="Right" right />
    <Loader status="error" message="Left" />
  </div>
);
