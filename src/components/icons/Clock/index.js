import React from 'react';
import PropTypes from 'prop-types';

const image = require('./clock.svg');

const Clock = ({ style, ...rest }) => (
  <img style={{ display: 'block', ...style }} src={image} alt="" {...rest} />
);

Clock.propTypes = {
  style: PropTypes.object,
};

export default Clock;
