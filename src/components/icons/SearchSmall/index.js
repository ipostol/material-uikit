import React from 'react';

const image = require('./search_small.svg');

const SearchSmall = props => (
  <img src={image} alt="" {...props} style={{ padding: '0', display: 'block' }} />
);

export default SearchSmall;
