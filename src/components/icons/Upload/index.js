import React from 'react';

const image = require('./upload.svg');

const Upload = props => (
  <img src={image} alt="" {...props} />
);

export default Upload;
