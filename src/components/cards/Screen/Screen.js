import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import cloudinary from 'bidstack-cloudinary';
import styles from './Screen.scss';

const Screen = ({ images, cost, description, places, resolutions, children, element: Element = 'div', ...rest }) => (
  <Element className={cn(styles.general, rest.className)} {...rest}>
    {children}
    {images.length > 1 ? <div className={styles.imagesWrap}>
      <img
        src={cloudinary.url(images[0], { crop: 'fill', width: 200, height: 180 })}
        alt=""
        className={styles.firstImage}
      />
      <div className={styles.wrap}>
        <img
          src={cloudinary.url(images[1], { crop: 'fill', width: 117, height: 88 })}
          alt=""
          className={styles.image}
        />
        <img
          src={cloudinary.url(images[2], { crop: 'fill', width: 117, height: 88 })}
          alt=""
          className={styles.image}
        />
      </div>
    </div>
  : <img
    src={cloudinary.url(images[0], { crop: 'fill', width: 337, height: 211 })}
    alt=""
    className={styles.mainImage}
  />}
    <div className={styles.infoWrap}>
      <div className={styles.cost}>{cost}</div>
      <div className={styles.screens}>{description}</div>
      <div className={styles.caption}>{places}</div>
      <div className={styles.caption}>{resolutions}</div>
    </div>
  </Element>
);

Screen.propTypes = {
  images: PropTypes.array,
  cost: PropTypes.string,
  description: PropTypes.string,
  places: PropTypes.string,
  resolutions: PropTypes.string,
  children: PropTypes.node,
  element: PropTypes.any,
};

export default Screen;
