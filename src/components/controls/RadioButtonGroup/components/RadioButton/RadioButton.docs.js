import React from 'react';
import { Skin } from 'react-markup-components';
import RadioButton from './RadioButton';

export default () => (
  <Skin>
    <div>
      <RadioButton isSelected />
      <RadioButton />
    </div>
  </Skin>
);
