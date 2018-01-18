import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Histogram.scss';

const Histogram = ({ histogram, ...rest }) => (
  <div {...rest} className={cn(styles.histogram, rest.className)}>
    {
      histogram.map((num, key) => (
        <div
          className={styles.bar}
          style={{ height: `${Math.round(((num * 34) / 100))}px` }}
          key={key}
        />
      ))
    }
  </div>
);

Histogram.propTypes = {
  histogram: PropTypes.array,
};

export default Histogram;
