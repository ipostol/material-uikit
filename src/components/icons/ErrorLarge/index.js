import React from 'react';

const image = require('./error_large.svg');

const ErrorLarge = ({ ...rest }) => (
  <img style={{ display: 'block' }} src={image} alt="" {...rest} />
);

export default ErrorLarge;
