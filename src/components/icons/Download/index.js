import React from 'react';

const image = require('./download.svg');

const Download = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Download;
