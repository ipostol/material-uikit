import React from 'react';
import Avatar from './Avatar';

export default () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gray',
    }}
  >
    <Avatar count={2} />
    <Avatar name="James Bond" />
    <Avatar name="James Bond" image="IMG_23082017_151643_0_wox5ko" />
  </div>
);
