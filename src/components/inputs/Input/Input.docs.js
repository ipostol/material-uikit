import React from 'react';
import { Skin } from 'react-markup-components';
import SearchIcon from '../../icons/SearchSmall';
import Input from './Input';

export const InputDocs = () =>
  <Skin>
    <div>
      <Input defaultValue="10pm" />
    </div>
    <br />
    <div>
      <Input defaultValue="with info" info="Amount of £234 incl. VAT will be charged from card" />
    </div>
    <br />
    <div>
      <Input defaultValue="10pm" label="Label" optional />
    </div>
    <br />
    <div>
      <Input icon={<SearchIcon style={{ display: 'block' }} />} defaultValue="10pm" />
    </div>
    <br />
    <div>
      <Input label="Label" error="some error" defaultValue="10pm" />
    </div>
    <br />
    <div>
      <Input defaultValue="10pm" secondary label="Label" />
    </div>
    <br />
    <div>
      <Input defaultValue="10pm" icon={<SearchIcon />} secondary label="Label" />
    </div>
    <br />
    <div>
      <Input defaultValue="10pm" error="Some error" secondary label="Label" />
    </div>
    <br />
    <div>
      <Input disabled secondary defaultValue="10pm" />
    </div>
  </Skin>;

export default InputDocs;
