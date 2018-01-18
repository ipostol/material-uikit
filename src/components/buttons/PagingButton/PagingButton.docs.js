import React from 'react';
import PagingButton from './PagingButton';

export default () => (
  <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <PagingButton page={3} />
    <PagingButton page={1} active />
    <PagingButton left />
    <PagingButton right />
  </div>
);
