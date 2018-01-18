import React from 'react';
import { Skin } from 'react-markup-components';
import DropdownIcon from './../../icons/More';
import IconMenu from './IconMenu';

const options = [{
  value: 'Option1',
}, {
  value: 'Option2',
}];

export const IconMenuDocs = () => (
  <Skin>
    <IconMenu
      options={options}
      onRight
      icon={<DropdownIcon />}
    />
    <br />
    <br />
  </Skin>
);

export default IconMenuDocs;
