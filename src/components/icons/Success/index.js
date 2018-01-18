import React from 'react';

const image = require('./success.svg');

const Success = props => (
  <img src={image} alt="" {...props} />
);

export default Success;
