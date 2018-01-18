import React from 'react';
import { Skin } from 'react-markup-components';
import Option from './Option';

export default () => (
  <Skin style={{ backgroundColor: '#ffffff' }}>
    <div style={{ padding: '10px' }}>
      <Option disabled>Test Label disabled</Option>
      <Option>Test Label</Option>
    </div>
  </Skin>
);
