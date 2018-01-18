import React from 'react';

const image = require('./arrow_down.svg');

const ArrowDown = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default ArrowDown;
