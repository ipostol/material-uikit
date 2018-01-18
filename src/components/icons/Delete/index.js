import React from 'react';

const image = require('./delete.svg');

const Delete = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Delete;
