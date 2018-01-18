import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Option.scss';

const Option = ({
  element: Element,
  children,
  className,
  size,
  icon,
  iconClass,
  disabled,
  ...rest
}) => (
  <Element
    className={cn(styles.general, className, styles[size], { [styles.disabled]: disabled })}
    {...rest}
  >
    {icon && <div className={cn(styles.icon, iconClass)}>{icon}</div>}
    {icon ? <span>{children}</span> : children}
  </Element>
);

Option.propTypes = {
  children: PropTypes.node,
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  icon: PropTypes.node,
  iconClass: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string, // s m l xl etc... for components height
};

Option.defaultProps = {
  size: 's',
  element: 'div',
};

export default Option;
