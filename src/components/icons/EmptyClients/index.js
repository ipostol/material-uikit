import React from 'react';
import PropTypes from 'prop-types';

const image = require('./emptyclients.svg');

const EmptyClients = ({ style, ...rest }) => (
  <img style={{ ...style }} src={image} alt="" {...rest} />
);

EmptyClients.propTypes = {
  style: PropTypes.object,
};

export default EmptyClients;
