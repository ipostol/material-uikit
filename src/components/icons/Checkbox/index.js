import React from 'react';
import PropTypes from 'prop-types';

const image = require('./checkbox.svg');

const Checkbox = ({ style, ...rest }) => (
  <img style={{ width: '18px', ...style }} src={image} alt="" {...rest} />
);

Checkbox.propTypes = {
  style: PropTypes.object,
};

export default Checkbox;
