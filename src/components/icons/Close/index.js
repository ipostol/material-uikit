import React from 'react';

const image = require('./close.svg');

const Close = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Close;
