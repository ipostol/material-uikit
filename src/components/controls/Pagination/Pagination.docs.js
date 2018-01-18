import React from 'react';
import { Skin, Preview } from 'react-markup-components';
import Pagination from './Pagination';

export default () => (
  <Preview>
    <Pagination active={1} length={150} perPage={10} onChange={p => console.log(p)} />
  </Preview>
);
