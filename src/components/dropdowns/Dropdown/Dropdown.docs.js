import React from 'react';
import { Skin } from 'react-markup-components';
import Dropdown from './Dropdown';
import Option from '../Option';
import Input from '../../inputs/Input';

export const DropdownDocs = () =>
  <Skin>
    <Dropdown
      trigger="Open"
      contentWidth="100px"
      onRight
    >
      <Option>Option1</Option>
      <Option>Option2</Option>
      <Option>Option3</Option>
      {/* <Option onClick={e => e.nativeEvent.stopImmediatePropagation()}>
        <Input value={window && window.location.href} readOnly />
      </Option> */}
    </Dropdown>
    <br />
    <br />
    <Dropdown
      trigger="Open right"
      contentWidth="300px"
      onRight
    >
      <Option disabled>Test Option1</Option>
      <Option>Test Option2</Option>
    </Dropdown>
    <br />
    <br />
    <Dropdown
      trigger="Open top"
      contentWidth="300px"
      onTop
    >
      <Option disabled>Test Option1</Option>
      <Option>Test Option2</Option>
    </Dropdown>
  </Skin>;

export default DropdownDocs;
