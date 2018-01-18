import React from 'react';
import PropTypes from 'prop-types';

const image = require('./search.svg');

const Search = ({ style, ...rest }) => (
  <img style={{ width: '20px', ...style }} src={image} alt="" {...rest} />
);

Search.propTypes = {
  style: PropTypes.object,
};

export default Search;
