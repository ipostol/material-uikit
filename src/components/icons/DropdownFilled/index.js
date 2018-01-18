import React from 'react';
import PropTypes from 'prop-types';

const image = require('./dropdown_filled.svg');

const DropdownFilled = ({ style, ...rest }) => (
  <img style={{ ...style }} src={image} alt="" {...rest} />
);

DropdownFilled.propTypes = {
  style: PropTypes.object,
};

export default DropdownFilled;
