import React from 'react';
import styles from './SearchMarker.scss';

const pinSearchImg = require('./images/pinSearch.svg');

const SearchMarker = () => (
  <img className={styles.general} src={pinSearchImg} alt="Search Marker" />
);

export default SearchMarker;
