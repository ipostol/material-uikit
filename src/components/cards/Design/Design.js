import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import cloudinary from 'bidstack-cloudinary';
import styles from './Design.scss';

const sizes = {
  xs: 48,
  s: 104,
  m: 172,
  l: 208,
  xl: 244,
};

const Design = ({ design, width, height, size, ...rest }) => (
  <div
    {...rest}
    className={cn(styles.design, rest.className)}
    style={{ width: width || sizes[size], height: height || sizes[size] }}
  >
    <img
      src={
        cloudinary[design.resource_type === 'video' ? 'video_thumbnail_url' : 'url'](design.public_id, {
          width: width || sizes[size],
          height: design.height,
          gravity: 'center',
          crop: 'fill',
        })
      }
      alt=""
    />
  </div>
);

Design.propTypes = {
  size: PropTypes.string,
  design: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Design;
