import React from 'react';

const image = require('./bidstack_logo.svg');

const Logo = props => (
  <img src={image} alt="" {...props} />
);

export default Logo;
