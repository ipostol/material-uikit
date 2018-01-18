import React from 'react';

const image = require('./error.svg');

const ErrorMedium = ({ ...rest }) => (
  <img style={{ display: 'block' }} src={image} alt="" {...rest} />
);

export default ErrorMedium;
