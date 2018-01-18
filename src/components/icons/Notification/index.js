import React from 'react';

const image = require('./notification.svg');

const Notification = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Notification;
