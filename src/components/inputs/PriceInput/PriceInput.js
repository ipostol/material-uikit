import React from 'react';
import numeral from 'numeral';
import Input from '../Input';

const normalizeNumber = (value, max = 1e+10) => {

  const number = numeral(value).value();

  if (number === null) return null;

  if (number > max) return max;

  return Math.abs(number);

};

const normalizePrice = (value) => {

  if (value || value === 0) {

    return `£${numeral(value).format('0,0')}`;

  }

  return '';

};

const PriceInput = ({ value, onChange, onBlur, ...rest }) => (
  <Input
    value={normalizePrice(value)}
    onChange={e => onChange(normalizeNumber(e.target.value))}
    onBlur={e => onBlur(normalizeNumber(e.target.value))}
    {...rest}
  />
);

PriceInput.defaultProps = {
  onBlur() {},
  onChange() {},
};

export default PriceInput;
