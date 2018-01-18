import React from 'react';

const image = require('./zoom.svg');

const Zoom = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Zoom;
