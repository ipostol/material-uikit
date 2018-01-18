import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CheckboxIcon from '../../icons/Checkbox';
import CheckboxIconRound from '../../icons/CheckboxRound';
import styles from './Checkbox.scss';

const Checkbox = ({ label, checked, disabled, className, onChange, mod, ...rest }) => (
  <button
    className={cn(styles.general, className)}
    onClick={disabled ? null : onChange}
    {...rest}
  >
    <span
      className={
        cn(styles.checkbox, styles[mod], { [styles.disabled]: disabled, [styles.checked]: checked })
      }
    >
      {checked && !disabled && !mod ? <CheckboxIcon /> : null}
      {checked && !disabled && mod === 'round' ? <CheckboxIconRound /> : null}
    </span>
    {label && <span className={styles.label}>{label}</span>}
  </button>
);

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  mod: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.any,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  onChange() {},
};

export default Checkbox;
