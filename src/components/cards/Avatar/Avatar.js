import React from 'react';
import PropTypes from 'prop-types';
import nameToColor from 'name-to-color';
import cn from 'classnames';
import cloudinary from 'bidstack-cloudinary';
import styles from './Avatar.scss';

const sizes = {
  xs: 24,
  s: 32,
  sm: 36,
  m: 40,
  l: 56,
};

const Avatar = ({ image, name, count, size, ...rest }) => (
  <div
    {...rest}
    className={cn(styles.general, styles[size], rest.className)}
    style={!image ? { backgroundColor: nameToColor(name) } : null}
  >
    {
      image ? (
        <div className={styles.image} style={{ backgroundImage: `url(${cloudinary.url(image, { width: sizes[size], height: sizes[size], crop: 'fill' })})` }} />
      ) : (
        <div>{count ? `+${count}` : name.split(' ').slice(0, 2).map(str => str[0]).join('')}</div>
      )
    }
  </div>
);

Avatar.propTypes = {
  image: PropTypes.node,
  name: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  count: PropTypes.number,
};

Avatar.defaultProps = {
  size: 'm',
};

export default Avatar;
