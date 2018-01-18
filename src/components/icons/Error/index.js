import React from 'react';

const image = require('./error.svg');

const Error = ({ ...rest }) => (
  <img style={{ display: 'block' }} src={image} alt="" {...rest} />
);

export default Error;
