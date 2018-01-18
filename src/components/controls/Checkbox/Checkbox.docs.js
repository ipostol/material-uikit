import React from 'react';
import { Skin } from 'react-markup-components';
import Checkbox from './Checkbox';

export const CheckboxSample = (props = {}) => (
  <Checkbox {...props} />
);

export const CheckboxDocs = () =>
  <Skin style={{ backgroundColor: 'gray' }} >
    <div>
      <CheckboxSample
        label="Unchecked"
        onChange={value => console.log('change', value)}
        checked={false}
      />
      <br />
      <CheckboxSample
        label="Checked"
        checked
        onChange={() => { }}
      />
      <br />
      <CheckboxSample
        label="Unchecked round"
        onChange={() => { }}
        checked={false}
        mod="round"
      />
      <br />
      <CheckboxSample
        label="Checked round"
        checked
        onChange={() => { }}
        mod="round"
      />
      <br />
      <CheckboxSample
        checked
        onChange={() => { }}
        label="Disabled"
        disabled
      />
      <br />
      <CheckboxSample
        onChange={() => { }}
      />
      <br />
      <CheckboxSample
        checked
        onChange={() => { }}
      />
    </div>
  </Skin>;

export default CheckboxDocs;
