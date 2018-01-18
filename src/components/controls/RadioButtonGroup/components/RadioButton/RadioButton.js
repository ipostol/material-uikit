import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './RadioButton.scss';

const RadioButton = ({ label, isSelected, ...rest }) => (
  <div className={styles.general} {...rest}>
    <div className={cn(styles.circle, { [styles.checked]: isSelected })} />
    {label && <div className={styles.label}>{label}</div>}
  </div>
);

RadioButton.propTypes = {
  isSelected: PropTypes.bool,
  label: PropTypes.node,
};

export default RadioButton;
