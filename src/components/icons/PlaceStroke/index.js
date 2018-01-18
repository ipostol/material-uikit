import React from 'react';

const image = require('./place.svg');

const PlaceStroke = props => (
  <img src={image} alt="" style={{ display: 'block' }} {...props} />
);

export default PlaceStroke;
