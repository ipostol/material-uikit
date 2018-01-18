import React from 'react';
import { Skin } from 'react-markup-components';
import GoogleInput from './GoogleInput';

export default () => (
  <Skin>
    <GoogleInput
      onLocationChange={l => console.log(l)}
      placeholder="Enter something..."
    />
  </Skin>
);
