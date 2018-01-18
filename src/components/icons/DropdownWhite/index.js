import React from 'react';

const image = require('./dropdown_white.svg');

const DropdownWhite = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default DropdownWhite;
