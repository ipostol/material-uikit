import React from 'react';

const image = require('./checked.svg');

const ChechboxRound = props => (
  <div
    style={{
      width: '20px',
      height: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1acfc9',
      borderRadius: '50%',
    }}
  >
    <img src={image} alt="" {...props} style={{ display: 'block' }} />
  </div>
);

export default ChechboxRound;
