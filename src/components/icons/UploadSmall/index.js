import React from 'react';

const image = require('./upload_small.svg');

const UploadSmall = props => (
  <img src={image} alt="" {...props} />
);

export default UploadSmall;
