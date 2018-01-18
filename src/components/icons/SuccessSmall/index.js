import React from 'react';
import PropTypes from 'prop-types';

const image = require('./success_small.svg');

const SuccessSmall = ({ style, ...rest }) => (
  <img src={image} alt="" {...rest} />
);

SuccessSmall.propTypes = {
  style: PropTypes.object,
};

export default SuccessSmall;
