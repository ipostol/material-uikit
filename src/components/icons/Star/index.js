import React from 'react';

const image = require('./star.svg');

const Share = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Share;
