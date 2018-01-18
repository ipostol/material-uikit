import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ArrowDown from '../../icons/ArrowDown';
import Dropdown from '../Dropdown';
import Option from '../Option';
import styles from './DropdownMenu.scss';

const DropdownMenu = ({
  value,
  options,
  onChange,
  icon,
  prefix,
  className,
  triggerClassName,
  ...rest
}) => (
  <div className={cn(styles.container, className)}>
    {prefix ? <div className={styles.prefix}>{prefix}</div> : null}
    <Dropdown
      trigger={
        <div className={cn(styles.trigger, triggerClassName)}>
          {(options.find(option => option.id === value) || {}).value}
          <div className={styles.icon}>{icon}</div>
        </div>
      }
      {...rest}
    >
      {
        options.map(({ id, value: optionValue, ...optionRest }) => (
          <Option key={id} {...optionRest} onClick={() => onChange(id)}>{optionValue}</Option>
        ))
      }
    </Dropdown>
  </div>
);

DropdownMenu.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.any,
  icon: PropTypes.node,
  className: PropTypes.string,
  triggerClassName: PropTypes.string,
  prefix: PropTypes.string,
};

DropdownMenu.defaultProps = {
  onChange() {},
  icon: <ArrowDown />,
};

export default DropdownMenu;
