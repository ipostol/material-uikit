import React from 'react';

const image = require('./filter.svg');

const Filter = props => (
  <img src={image} alt="" {...props} />
);

export default Filter;
