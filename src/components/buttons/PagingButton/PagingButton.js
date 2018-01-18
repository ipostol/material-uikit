import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from './../Button';
import ArrowRight from '../../icons/ArrowRight';
import ArrayLeft from '../../icons/ArrowLeft';
import styles from './PagingButton.scss';

const PagingButton = ({ page, active, prev, next, ...rest }) => {

  let content = page;

  if (prev) {

    content = <ArrayLeft />;

  } else if (next) {

    content = <ArrowRight />;

  }

  return (
    <Button
      {...rest}
      className={cn(styles.button, { [styles.active]: active }, rest.className)}
      size="m"
      mod="secondary"
    >
      {content}
    </Button>
  );

};

PagingButton.propTypes = {
  page: PropTypes.number,
  active: PropTypes.bool,
  prev: PropTypes.bool,
  next: PropTypes.bool,
};

export default PagingButton;
