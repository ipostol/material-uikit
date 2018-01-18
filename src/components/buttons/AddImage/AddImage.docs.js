import React from 'react';
import { Skin } from 'react-markup-components';
import AddImage from './AddImage';

export default () => (
  <Skin>
    <AddImage label="Add logo" size="s" onButtonClick={e => e.preventDefault()} />
    <br />
    <AddImage label="Add design" size="l" />
  </Skin>
);
