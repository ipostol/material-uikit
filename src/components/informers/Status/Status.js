import React from 'react';
import cn from 'classnames';
import styles from './Status.scss';

const Status = ({ status, className }) => (
  <div className={cn(styles.container, className, styles[status])}>
    {status}
  </div>
);

export default Status;
