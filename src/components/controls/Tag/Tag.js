import React from 'react';
import cn from 'classnames';
import CloseIcon from '../../icons/CloseModal';
import styles from './Tag.scss';

const Tag = ({ label, className, onRemove, ...rest }) => (
  <div className={cn(styles.container, className)} {...rest}>
    {label}
    <CloseIcon onClick={onRemove} className={styles.icon} />
  </div>
);

export default Tag;
