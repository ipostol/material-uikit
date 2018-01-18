import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../icons/Close';
import Button from '../../buttons/Button';
import styles from './Dialog.scss';

const Dialog = ({
  header,
  description,
  onClose,
  primaryProps,
  secondaryProps,
}) => (
  <div className={styles.general}>
    <div className={styles.header}>{header}</div>
    <div className={styles.description}>{description}</div>
    <div className={styles.wrap}>
      <Button
        mod="tertiary"
        className={styles.button}
        onClick={onClose}
        {...secondaryProps}
      >
        Cancel
      </Button>
      <Button
        mod="secondary"
        className={styles.button}
        {...primaryProps}
      >
        Delete
      </Button>
    </div>
    <Button className={styles.close} onClick={onClose} mod="icon">
      <CloseIcon />
    </Button>
  </div>
);

export default Dialog;

Dialog.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  onClose: PropTypes.func,
  primaryProps: PropTypes.object,
  secondaryProps: PropTypes.object,
};
