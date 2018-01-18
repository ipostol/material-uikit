import React from 'react';

const image = require('./settings.svg');

const Settings = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default Settings;
