import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import PlusIcon from '../../icons/Plus';
import Button from './../Button';
import styles from './Add.scss';

const Add = props => (
  <Button
    {...props}
    mod="primary"
    icon={<PlusIcon />}
    round="round"
    className={cn(styles.add, props.className)}
  />
);

export default Add;
