import React from 'react';

const image = require('./print.svg');

const Print = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Print;
