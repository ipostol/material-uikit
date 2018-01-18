import React from 'react';
import PropTypes from 'prop-types';

const image = require('./calendar.svg');

const Calendar = ({ style, ...rest }) => (
  <img style={{ ...style }} src={image} alt="" {...rest} />
);

Calendar.propTypes = {
  style: PropTypes.object,
};

export default Calendar;
