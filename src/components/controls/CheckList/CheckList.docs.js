import React from 'react';
import { Skin } from 'react-markup-components';
import CheckList from './CheckList';

const props = {
  options: [
    { id: 1, value: 'Somegin 1' },
    { id: 2, value: 'asdkjkasd 2' },
    { id: 3, value: 'ajksdjalsd 3' },
    { id: 1, value: 'Somegin 1' },
    { id: 2, value: 'asdkjkasd 2' },
    { id: 3, value: 'ajksdjalsd 3' },
    { id: 1, value: 'Somegin 1' },
    { id: 2, value: 'asdkjkasd 2' },
    { id: 3, value: 'ajksdjalsd 3' },
  ],
  value: [1, 2],
  onChange: v => console.log(v),
};

export default () => (
  <Skin>
    <CheckList {...props} />
  </Skin>
);
