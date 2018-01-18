import React, { PropTypes } from 'react';

const image = require('./resolution.svg');

const Resolution = ({ style, ...rest }) => (
  <img style={{ ...style }} src={image} alt="" {...rest} />
);

Resolution.propTypes = {
  style: PropTypes.object,
};

export default Resolution;
