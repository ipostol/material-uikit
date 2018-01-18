import React from 'react';
import PropTypes from 'prop-types';

const image = require('./not_found.svg');

const NotFound = ({ style, ...rest }) => (
  <img style={{ ...style }} src={image} alt="" {...rest} />
);

NotFound.propTypes = {
  style: PropTypes.object,
};

export default NotFound;
