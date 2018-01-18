import React from 'react';

const image = require('./video.svg');

const Video = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Video;
