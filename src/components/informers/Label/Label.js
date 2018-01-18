import React from 'react';
import cn from 'classnames';
import styles from './Label.scss';

const Label = ({ children, isFocused, isError, optional, className, ...rest }) => (
  children ? (
    <div
      {...rest}
      className={cn(styles.label, {
        [styles.focused]: isFocused,
        [styles.error]: isError,
      }, className)}
    >
      {children}{optional ? <span className={styles.optional}> (Optional)</span> : ''}
    </div>
  ) : null
);

export default Label;
