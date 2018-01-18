import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import cn from 'classnames';
import ArrowRight from './../../icons/ArrowRight';
import styles from './NavLink.scss';

const NavLink = ({ to, text, element: Element, ...rest }) => (
  <Element
    {...rest}
    className={cn(styles.general, to ? styles.bold : null)}
  >
    <ArrowRight style={{ margin: '0px 16px' }} />
    {text}
  </Element>
);

NavLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

NavLink.defaultProps = {
  element: Link,
};

export default NavLink;
