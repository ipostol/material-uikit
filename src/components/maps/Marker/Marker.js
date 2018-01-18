import React from 'react';
import cn from 'classnames';
import numeral from 'numeral';
import cloudinary from 'bidstack-cloudinary';
import Tooltip from '../../tooltips/Tooltip';
import Info from './components/Info';
import styles from './Marker.scss';

const Marker = ({
  timeslotsCount,
  typeName,
  typeIcon,
  minPrice,
  maxPrice,
  size,
  place,
  looping,
  isHover,
  isVisited,
  isLoosing,
  isWatching,
  isWinning,
  onClick,
  $hover,
}) => {

  let statusColor = 'general';

  if (isHover || $hover) {

    statusColor = 'hover';

  } else if (isVisited) {

    statusColor = 'visited';

  } else if (isLoosing) {

    statusColor = 'loosing';

  } else if (isWinning) {

    statusColor = 'winning';

  }

  const isMultiple = timeslotsCount > 1;
  const icon = cloudinary.url(typeIcon, { width: 16, height: 16 });

  const info = (
    <Info
      timeslotsCount={timeslotsCount}
      place={place}
      typeName={typeName}
      typeIcon={typeIcon}
      minPrice={minPrice}
      maxPrice={maxPrice}
      resolution={size}
      looping={looping}
    />
  );

  return (
    <Tooltip
      placement="bottom"
      overlay={info}
      prefixCls="rc-tooltip-custom"
      align={{ points: ['tl', 'br'] }}
    >
      <div
        className={styles.container}
        onClick={onClick}
        style={($hover || isHover) ? { zIndex: 2 } : null}
      >
        <div className={cn(styles.general, styles[statusColor])}>
          <img className={styles.icon} src={icon} alt="" />
          £{numeral(minPrice).format('0,0')}
          {
            isMultiple ? '+' : null
          }
        </div>
        <div className={cn(styles.arrow, styles[`${statusColor}Arrow`])} />
      </div>
    </Tooltip>
  );

};

export default Marker;
