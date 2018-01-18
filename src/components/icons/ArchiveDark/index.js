import React from 'react';

const image = require('./archive_dark.svg');

const ArchiveDark = props => (
  <img src={image} alt="" {...props} style={{ display: 'block' }} />
);

export default ArchiveDark;
