import React from 'react';

const image = require('./sort_down.svg');

const SortUp = props => (
  <img src={image} alt="" {...props} style={{ transform: 'rotate(180deg)' }} />
);

export default SortUp;
