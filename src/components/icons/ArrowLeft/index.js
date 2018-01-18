import React from 'react';
import PropTypes from 'prop-types';

const image = require('../DropdownGray/dropdown_gray.svg');

const ArrowLeft = ({ style, ...rest }) => (
  <img style={{ width: '13px', transform: 'rotate(90deg)', ...style }} src={image} alt="" {...rest} />
);

ArrowLeft.propTypes = {
  style: PropTypes.object,
};

export default ArrowLeft;
