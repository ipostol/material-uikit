import React from 'react';
import ChipsGroup from './ChipsGroup';

const props = {
  active: 'hourly',
  elements: [
    { id: 'hourly', label: 'Hourly' },
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
  ],
};


export default () => (
  <div style={{ height: '100%', marginLeft: '450px', marginTop: '50px' }}>
    <ChipsGroup {...props} />
  </div>
);
