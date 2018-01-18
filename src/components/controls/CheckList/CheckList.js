import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Checkbox from '../Checkbox';
import styles from './CheckList.scss';

const CheckList = ({ options = [], onChange, value, ...rest }) => (
  <div className={cn(styles.container, rest.className)}>
    {
      options.map(option => (
        <Checkbox
          key={option.id}
          label={option.value}
          checked={value.includes(option.id)}
          onChange={() => onChange(option.id)}
          className={styles.label}
        />
      ))
    }
  </div>
);

CheckList.propTypes = {
  options: PropTypes.array,
  value: PropTypes.array,
  onChange: PropTypes.func,
};

export default CheckList;
