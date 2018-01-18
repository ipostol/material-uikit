import React from 'react';
import PropTypes from 'prop-types';

const image = require('./clockgray.svg');

const ClockGray = ({ style, ...rest }) => (
  <img style={{ ...style }} src={image} alt="" {...rest} />
);

ClockGray.propTypes = {
  style: PropTypes.object,
};

export default ClockGray;
