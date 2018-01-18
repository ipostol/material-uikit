import React from 'react';

const image = require('./star_filled.svg');

const StarFilled = props => (
  <img src={image} alt="" {...props} />
);

export default StarFilled;
