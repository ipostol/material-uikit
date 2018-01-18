import React from 'react';
import cn from 'classnames';
import RadioButton from './components/RadioButton';
import styles from './RadioButtonGroup.scss';

const RadioButtonGroup = ({ active, options, onChange, ...rest }) => (
  <div className={cn(styles.general, rest.className)}>
    {
      options.map(option => (
        <RadioButton
          key={option.id}
          isSelected={option.id === active}
          label={option.name}
          onClick={() => onChange(option.id)}
        />
      ))
    }
  </div>
);

export default RadioButtonGroup;
