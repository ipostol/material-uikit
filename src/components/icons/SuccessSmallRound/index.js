import React from 'react';
import PropTypes from 'prop-types';

const image = require('./success_small.svg');

const SuccessSmallRound = ({ style, ...rest }) => (
  <div
    style={{
      borderRadius: '50%',
      border: '1px solid #1acfc9',
      width: '20px',
      height: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      margin: '2px',
    }}
  >
    <img src={image} alt="" {...rest} />
  </div>
);

SuccessSmallRound.propTypes = {
  style: PropTypes.object,
};

export default SuccessSmallRound;
