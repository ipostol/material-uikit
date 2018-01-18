import React from 'react';

const image = require('./place_gray.svg');

const PlaceGray = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default PlaceGray;
