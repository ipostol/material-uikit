import React from 'react';
import NavLink from './NavLink';

export default () => (
  <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <NavLink text="to=false" />
    <NavLink to text="to=true" />
  </div>
);
