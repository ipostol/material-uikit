import React from 'react';
import PropTypes from 'prop-types';

const image = require('./back.svg');

const Back = ({ style, ...rest }) => (
  <img style={{ display: 'block', ...style }} src={image} alt="" {...rest} />
);

Back.propTypes = {
  style: PropTypes.object,
};

export default Back;
