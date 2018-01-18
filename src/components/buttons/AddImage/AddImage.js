import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '../Button';
import UploadIcon from '../../icons/UploadSmall';
import styles from './AddImage.scss';

const AddImage = ({ size, ...rest }) => (
  <Button
    mod="link"
    className={cn(styles.addImageButton, styles[size])}
    icon={<UploadIcon />}
    {...rest}
  />
);


AddImage.propTypes = {
  size: PropTypes.string,
};

AddImage.defaultProps = {
  size: 'l',
};

export default AddImage;
