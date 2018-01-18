import React from 'react';

const image = require('./place.svg');

const Place = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Place;
