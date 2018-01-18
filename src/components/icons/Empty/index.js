import React from 'react';
import PropTypes from 'prop-types';

const image = require('./empty.svg');

const Empty = ({ style, ...rest }) => (
  <img style={{ ...style }} src={image} alt="" {...rest} />
);

Empty.propTypes = {
  style: PropTypes.object,
};

export default Empty;
