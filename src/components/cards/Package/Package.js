import React from 'react';
import PropTypes from 'prop-types';
import Screen from '../Screen';
import Target from '../../icons/Target';
import styles from './Package.scss';

const Package = ({ header, percent, ...props }) => (
  <Screen {...props}>
    <div className={styles.headerWrap}>
      <div className={styles.header}>{header}</div>
      <Target className={styles.icon} />
      <div className={styles.percent}>{percent}</div>
    </div>
  </Screen>
);

Package.propTypes = {
  header: PropTypes.string,
  percent: PropTypes.string,
};

export default Package;
