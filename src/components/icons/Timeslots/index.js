import React from 'react';

const image = require('./timeslots.svg');

const Timeslots = props => (
  <img src={image} alt="" {...props} />
);

export default Timeslots;
