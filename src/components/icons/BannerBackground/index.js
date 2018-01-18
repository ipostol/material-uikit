import React from 'react';

const image = require('./background.svg');

const BannerBackground = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default BannerBackground;
