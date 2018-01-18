import React from 'react';
import cn from 'classnames';
import styles from './Informer.scss';

const Informer = ({ children, className }) => (
  <div className={cn(styles.container, className)}>
    {children}
  </div>
);

export default Informer;
