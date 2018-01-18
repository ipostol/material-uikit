import React from 'react';
import { Skin } from 'react-markup-components';
import DatePicker from './DatePicker';

export default () => (
  <Skin>
    <DatePicker value={new Date()} />
    <br />
    <br />
    <br />
    <DatePicker
      isRequired
      isRange
      disabledDays={{ after: new Date() }}
      initialMonth={new Date(new Date().getYear(), new Date().getMonth() - 1)}
      value={[new Date(), new Date().getTime() + (12 * 24 * 60 * 60 * 1000)]}
    />
  </Skin>
);
