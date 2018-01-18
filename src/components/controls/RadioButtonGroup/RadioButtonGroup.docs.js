import React from 'react';
import { Skin } from 'react-markup-components';
import RadioButtonGroup from './RadioButtonGroup';

const props = {
  active: 'male',
  options: [
    { id: 'both', name: 'Any' },
    { id: 'male', name: 'Male' },
    { id: 'female', name: 'Female' },
  ],
  onChange: active => console.log(active),
};

export default () => (
  <Skin>
    <RadioButtonGroup {...props} />
  </Skin>
);
