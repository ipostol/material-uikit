import React from 'react';

const image = require('./logo.svg');

const LogoLight = props => (
  <img src={image} alt="" {...props} />
);

export default LogoLight;
