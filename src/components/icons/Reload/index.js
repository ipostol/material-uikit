import React from 'react';

const image = require('./reload.svg');

const Reload = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Reload;
