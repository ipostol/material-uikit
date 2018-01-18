import React from 'react';
import PropTypes from 'prop-types';

const image = require('./dropdown_arrows.svg');

const DropdownArrows = ({ style, ...rest }) => (
  <img style={{ ...style }} src={image} alt="" {...rest} />
);

DropdownArrows.propTypes = {
  style: PropTypes.object,
};

export default DropdownArrows;
