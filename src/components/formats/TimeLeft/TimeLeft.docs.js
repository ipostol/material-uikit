import React from 'react';
import { Skin } from 'react-markup-components';
import TimeLeft from './TimeLeft';

const date = new Date().getTime() + 3000;

export default () => (
  <Skin>
    <TimeLeft date={date} format="simple" />
    <br />
    <br />
    <TimeLeft date={date} format="short" />
    <br />
    <br />
    <TimeLeft date={date} format="long" finish={() => console.log('finish')} />
  </Skin>
);
