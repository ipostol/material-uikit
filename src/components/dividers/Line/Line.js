import React from 'react';
import cn from 'classnames';
import styles from './Line.scss';

const Line = props => (
  <div {...props} className={cn(styles.line, props.className)} />
);

export default Line;
