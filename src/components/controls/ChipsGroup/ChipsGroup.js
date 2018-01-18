import React from 'react';
import cn from 'classnames';
import styles from './ChipsGroup.scss';

const Element = ({ isSelected, label, disabled, ...rest }) => (
  <div
    className={cn(styles.element, { [styles.selected]: isSelected, [styles.disabled]: disabled })}
    {...rest}
  >
    {label}
  </div>
);

const ChipsGroup = ({ options, value, onChange, className }) => (
  <div className={cn(styles.container, className)}>
    {options.map(element => (
      <Element
        key={element.id}
        isSelected={element.id === value}
        label={element.value}
        disabled={element.disabled}
        onClick={() => onChange(element.id)}
      />
    ))}
  </div>
);

export default ChipsGroup;
