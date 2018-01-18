import React from 'react';

const image = require('./next.svg');

const Next = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Next;
