import React, { PureComponent } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import PagingButton from '../../buttons/PagingButton';
import styles from './Pagination.scss';

const Pagination = ({ length, perPage, active, onChange, className }) => {

  if (length <= perPage) return null;

  return (
    <div className={cn(styles.general, className)}>
      <div className={styles.text}>
        {((active - 1) * perPage) + 1}-{active * perPage} of {length}
      </div>
      <PagingButton
        prev
        className={styles.button}
        disabled={active === 1}
        onClick={() => onChange(active - 1)}
      />
      <PagingButton
        next
        className={styles.button}
        disabled={length / perPage <= active}
        onClick={() => onChange(active + 1)}
      />
    </div>
  );

};

Pagination.propTypes = {
  onChange: PropTypes.func,
  active: PropTypes.number,
  length: PropTypes.number,
  perPage: PropTypes.number,
  className: PropTypes.string,
};

export default Pagination;
