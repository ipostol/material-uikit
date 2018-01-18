import React from 'react';
import PropTypes from 'prop-types';

const image = require('./dropdown.svg');

const Dropdown = ({ style, ...rest }) => (
  <img style={{ width: '16px', marginRight: '1px', ...style }} src={image} alt="" {...rest} />
);

Dropdown.propTypes = {
  style: PropTypes.object,
};

export default Dropdown;
