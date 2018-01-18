import React from 'react';

const image = require('./plus_grey.svg');

const PlusGrey = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default PlusGrey;
