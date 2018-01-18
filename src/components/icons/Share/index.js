import React from 'react';

const image = require('./share.svg');

const Share = props => (
  <img src={image} alt="" {...props} />
);

export default Share;
