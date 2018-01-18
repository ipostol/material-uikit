import React from 'react';

const image = require('./info.svg');

const Info = props => (
  <img src={image} alt="" {...props} />
);

export default Info;
