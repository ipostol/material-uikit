import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import DropdownIcon from './../../icons/DropdownArrows/';
import Dropdown from '../Dropdown';
import Option from '../Option';
import Label from '../../informers/Label';
import styles from './Select.scss';

const Select = ({
  options,
  value,
  placeholder,
  onChange,
  error,
  label,
  optional,
  ...rest
}) => {

  const activeOption = options.find(option => option.id === value);

  return (
    <div>
      <Label
        optional={optional}
        isError={error}
      >
        {label}
      </Label>
      <Dropdown
        trigger={[
          <div
            key="0"
            className={cn(
              styles.trigger,
              styles.general,
              { [styles.placeholder]: !activeOption },
            )}
          >
            {
              activeOption ? activeOption.value : placeholder
            }
          </div>,
        ]}
        contentWidth="100%"
        className={styles.fullWidth}
        {...rest}
      >
        <div className={styles.content}>
          {
            options.map(({ id, value: optionValue, ...optionRest }) => (
              <Option key={id} onClick={() => onChange(id)} {...optionRest} size="l">
                {optionValue}
              </Option>
            ))
          }
        </div>
      </Dropdown>
      {error && <div className={styles.warning}>{error}</div>}
    </div>
  );

};

Select.propTypes = {
  value: PropTypes.any,
  placeholder: PropTypes.node,
  onChange: PropTypes.func,
  options: PropTypes.array, // [{ id: 1, value: 'value1' }, { id: 2, value: 'value2' }]
  error: PropTypes.node,
  optional: PropTypes.bool,
  label: PropTypes.node,
};

Select.defaultProps = {
  onChange() {},
  placeholder: 'Please select',
};

export default Select;
