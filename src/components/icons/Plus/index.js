import React from 'react';

const image = require('./plus.svg');

const Plus = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Plus;
