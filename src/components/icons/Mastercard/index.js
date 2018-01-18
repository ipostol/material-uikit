import React from 'react';

const image = require('./mastercard.png');
const image2x = require('./mastercard@2x.png');
const image3x = require('./mastercard@3x.png');

const Amex = props => (
  <img
    src={image}
    srcSet={`${image} 1x, ${image2x} 2x, ${image3x} 3x`}
    alt=""
    {...props}
    style={{ display: 'block' }}
  />
);

export default Amex;
