import React from 'react';

const image = require('./minus.svg');

const Minus = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Minus;
