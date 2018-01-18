import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SuccessIcon from './../../icons/Success';
import ErrorIcon from './../../icons/Error';
import styles from './Loader.scss';

const Loader = ({ status, right, message, ...rest }) => (
  <div
    className={
      cn(styles.general, rest.className, {
        [styles.messageRight]: message && right,
      })
    }
    {...rest}
  >
    {message}
    <div
      className={cn(
        styles.loader,
        status === 'loading' ? styles.rotate : null,
        status === 'error' ? styles.error : null,
        message && !right ? styles.marginLeft : null,
        message && right ? styles.marginRight : null,
      )}
    >
      {status === 'success' ? <SuccessIcon /> : null}
      {status === 'error' ? <ErrorIcon /> : null}
    </div>
  </div>
);

Loader.propTypes = {
  status: PropTypes.string, // loading | error | success
  right: PropTypes.bool,
  message: PropTypes.string,
};

export default Loader;
