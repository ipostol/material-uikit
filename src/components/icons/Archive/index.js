import React from 'react';

const image = require('./archive.svg');

const Archive = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Archive;
