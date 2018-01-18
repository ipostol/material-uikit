import React from 'react';
import PropTypes from 'prop-types';
import DropdownIcon from '../../icons/More';
import Dropdown from '../Dropdown';
import Option from '../Option';
import styles from './IconMenu.scss';

const IconMenu = ({ icon, options, children, ...rest }) => (
  <Dropdown
    trigger={<div className={styles.icon}>{icon}</div>}
    {...rest}
  >
    {
      options ? options.map(({ value, ...optionRest }, index) => (
        <Option key={index} {...optionRest}>
          {value}
        </Option>
      )) : children
    }
  </Dropdown>
);

IconMenu.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node,
  options: PropTypes.array,
};

IconMenu.defaultProps = {
  icon: <DropdownIcon />,
};

export default IconMenu;
