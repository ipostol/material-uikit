import React from 'react';

const image = require('./print_light.svg');

const PrintLight = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default PrintLight;
