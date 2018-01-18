import React from 'react';
import { Skin } from 'react-markup-components';
import Select from './Select';
import Option from '../Option';

const options = [{
  id: 1,
  value: 'Option with value1',
}, {
  id: 2,
  value: 'Option with value2',
  icon: <div style={{ width: 16, height: 16, background: 'red' }} />,
}];

export const DropdownDocs = () =>
  <Skin>
    <Select
      options={options}
      placeholder="Select some val"
      value={1}
      onChange={id => console.log('change', id)}
    />
    <br />
    <br />
    <div style={{ width: '200px' }}>
      <Select
        error="Some error"
        label="Sector"
        options={options}
        placeholder="Select some val"
        onChange={id => console.log('change', id)}
      />
    </div>
  </Skin>;

export default DropdownDocs;
