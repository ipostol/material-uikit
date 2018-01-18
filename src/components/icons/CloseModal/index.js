import React from 'react';

const image = require('./close.svg');

const CloseModal = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default CloseModal;
