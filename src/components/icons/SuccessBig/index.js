import React from 'react';
import PropTypes from 'prop-types';

const image = require('./success_big.svg');

const SuccessBig = ({ style, ...rest }) => (
  <img src={image} alt="" {...rest} />
);

SuccessBig.propTypes = {
  style: PropTypes.object,
};

export default SuccessBig;
