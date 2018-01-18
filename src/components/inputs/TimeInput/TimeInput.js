import React from 'react';
import Input from '../Input';

const normalizeTime = (value, prevValue) => {

  if (value === '') return '';

  if (!/^[0-9:]+$/.test(value) || value.length > 5) return prevValue;

  let backspace = false;

  if (prevValue.length > value.length) {

    backspace = true;

  }

  if (backspace) {

    return value;

  }

  if (value === '24') return '24:00';

  if (value.split(':').length - 1 >= 2) return prevValue;

  if (parseInt(value.split(':')[0], 10) > 24 && value.length === 2) {

    if (value[1] <= 5) {

      return `${value[0]}:${value[1]}`;

    }

    return `${value[0]}:59`;

  }

  if (value.length >= 2 && !value.includes(':')) {

    return `${value}:`;

  }

  if (value.split(':')[1] && (value.split(':')[1] > 59 || value.split(':')[1][0] >= 6)) {

    return `${value.split(':')[0]}:59`;

  }

  return value;

};

const TimeInput = ({ onChange, ...rest }) => (
  <Input
    onChange={e => onChange(normalizeTime(e.target.value, rest.value))}
    {...rest}
  />
);

TimeInput.defaultProps = {
  onChange() {},
};

export default TimeInput;
