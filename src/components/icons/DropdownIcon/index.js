import React from 'react';
import PropTypes from 'prop-types';

const image = require('./dropdown_icon.svg');

const DropdownIcon = ({ style, ...rest }) => (
  <img style={{ ...style }} src={image} alt="" {...rest} />
);

DropdownIcon.propTypes = {
  style: PropTypes.object,
};

export default DropdownIcon;
