import React from 'react';

const image = require('./warning.svg');

const Warning = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Warning;
