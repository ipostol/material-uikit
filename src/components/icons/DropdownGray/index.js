import React from 'react';
import PropTypes from 'prop-types';

const image = require('./dropdown_gray.svg');

const DropdownGray = ({ style, ...rest }) => (
  <img style={{ ...style }} src={image} alt="" {...rest} />
);

DropdownGray.propTypes = {
  style: PropTypes.object,
};

export default DropdownGray;
