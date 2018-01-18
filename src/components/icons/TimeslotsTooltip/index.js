import React from 'react';

const image = require('./timeslotsTooltip.svg');

const TimeslotsTooltip = props => (
  <img src={image} alt="" {...props} />
);

export default TimeslotsTooltip;
