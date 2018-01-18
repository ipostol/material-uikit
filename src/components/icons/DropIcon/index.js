import React from 'react';
import PropTypes from 'prop-types';

const image = require('./drop_icon.svg');

const DropIcon = ({ style, ...rest }) => (
  <img style={{ ...style }} src={image} alt="" {...rest} />
);

DropIcon.propTypes = {
  style: PropTypes.object,
};

export default DropIcon;
