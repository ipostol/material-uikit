import React from 'react';

const image = require('./looping.svg');

const Looping = props => (
  <img src={image} alt="" {...props} />
);

export default Looping;
