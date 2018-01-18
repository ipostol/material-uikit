import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '../../buttons/Button';
import FilterIcon from '../../icons/Filter'; // FIXME
import Checkbox from '../../controls/Checkbox';
import Dropdown from '../Dropdown';
import Option from '../Option';
import styles from './DropdownFilter.scss';

const DropdownFilter = ({
  value,
  options,
  onChange,
  className,
  contentWidth,
  trigger,
  ...rest
}) => (
  <div className={cn(styles.container, className)}>
    <Dropdown
      trigger={trigger}
      contentWidth={contentWidth}
      {...rest}
    >
      {
        options.map(({ id, checked, label, separator, ...optionRest }, index) => {

          if (separator) {

            return (
              <div className={styles.separator} key={`separator_${index}`} />
            );

          }

          return (
            <Option
              key={id}
              {...optionRest}
              onClick={(e) => {

                e.nativeEvent.stopImmediatePropagation();
                onChange(id, !checked);

              }}
            >
              <Checkbox
                checked={checked}
                label={label}
              />
            </Option>
          );

        })
      }
    </Dropdown>
  </div>
);

DropdownFilter.propTypes = {
  trigger: PropTypes.node,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.any,
  className: PropTypes.string,
  contentWidth: PropTypes.number,
};

DropdownFilter.defaultProps = {
  onChange() {},
  contentWidth: 272,
  trigger: (
    <Button
      mod="secondary"
      size="m"
      width={95}
      icon={<FilterIcon style={{ marginLeft: '-8px', marginRight: '8px' }} />}
      className={styles.button}
    >
      Filter
    </Button>
  ),
};

export default DropdownFilter;
