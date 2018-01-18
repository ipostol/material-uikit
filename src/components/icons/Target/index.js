import React from 'react';

const image = require('./target.svg');

const Target = props => (
  <img src={image} alt="" {...props} />
);

export default Target;
