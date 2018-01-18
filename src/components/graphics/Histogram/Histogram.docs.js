import React from 'react';
import { Skin } from 'react-markup-components';
import Histogram from './Histogram';

export default () => (
  <Skin>
    <Histogram histogram={[0, 23, 45, 65, 88, 34, 100, 0, 0, 23]} />
  </Skin>
);
