import React from 'react';

const image = require('./more.svg');

const More = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default More;
