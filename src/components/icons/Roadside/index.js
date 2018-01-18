import React from 'react';
import PropTypes from 'prop-types';

const image = require('./roadside.svg');

const Roadside = ({ style, ...rest }) => (
  <img style={{ display: 'block', ...style }} src={image} alt="" {...rest} />
);

Roadside.propTypes = {
  style: PropTypes.object,
};

export default Roadside;
