import React from 'react';
import cn from 'classnames';
import styles from './Link.scss';

const Link = ({ children, element: Element, isSelected, ...rest }) => (
  <Element
    {...rest}
    className={cn(styles.link, rest.className, { [styles.isSelected]: isSelected })}
  >
    {children}
  </Element>
);

Link.defaultProps = {
  element: 'a',
};

export default Link;
