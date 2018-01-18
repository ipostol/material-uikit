import React from 'react';
import { Skin } from 'react-markup-components';
import DropdownIcon from './../../icons/DropdownGray';
import DropdownFilledIcon from '../../icons/DropdownFilled';
import DropdownMenu from './DropdownMenu';
import styles from './DropdownMenu.scss';

const options = [{
  id: 1,
  value: 'Active',
}, {
  id: 2,
  value: 'Recent',
}];

export const DropdownMenuDocs = () => (
  <Skin>
    <DropdownMenu
      options={options}
      value={1}
      onChange={id => console.log('change', id)}
      icon={<DropdownIcon />}
    />
    <br />
    <DropdownMenu
      options={options}
      value={2}
      onChange={id => console.log('change', id)}
      icon={<DropdownFilledIcon />}
      className={styles.fontLight}
    />
    <br />
    <DropdownMenu
      options={options}
      value={2}
      onChange={id => console.log('change', id)}
      icon={<DropdownFilledIcon />}
      className={styles.fontLight}
      prefix="Sort by:"
    />
    <br />
    <br />
  </Skin>
);

export default DropdownMenuDocs;
