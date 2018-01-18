import React from 'react';
import { Skin } from 'react-markup-components';
import DropdownMenu from './DropdownFilter';
import MoreIcon from '../../icons/More';

const options = [{
  id: 1,
  label: 'Active',
  checked: true,
}, {
  separator: true,
}, {
  id: 2,
  label: 'Recent',
  checked: true,
}];

export const DropdownFilterDocs = () => (
  <Skin>
    <DropdownMenu
      options={options}
      value={1}
      onChange={(id, status) => console.log('change', id, status)}
    />
    <DropdownMenu
      options={options}
      trigger={<MoreIcon />}
      contentWidth={200}
      onRight
      value={1}
      onChange={(id, status) => console.log('change', id, status)}
    />
  </Skin>
);

export default DropdownFilterDocs;
