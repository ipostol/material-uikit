import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import cloudinary from 'bidstack-cloudinary';
import cn from 'classnames';
import PlaceIcon from '../../../../icons/Place';
import DateIcon from '../../../../icons/Timeslots';
import TimeslotsTooltipIcon from '../../../../icons/TimeslotsTooltip';
import ResolutionIcon from '../../../../icons/Resolution';
import LoopingIcon from '../../../../icons/Looping';
import styles from './Info.scss';

const Info = ({
  timeslotsCount,
  minPrice,
  maxPrice,
  typeName,
  typeIcon,
  resolution,
  looping,
  place,
}) => {

  const isMultiple = timeslotsCount > 1;

  const price = isMultiple ? (
    <div>
      £{numeral(minPrice).format('0,0')} – £{numeral(maxPrice).format('0,0')}
    </div>
  ) : (
    <span>£{numeral(minPrice).format('0,0')}</span>
  );

  const icon = cloudinary.url(typeIcon, { width: 16, height: 16 });

  return (
    <div className={styles.general}>
      <div className={styles.header}>
        <div className={styles.price}>
          {price}
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.infoWrap}>
        <PlaceIcon className={cn(styles.icon, styles.invertIcon)} />
        <div>{place}</div>
      </div>
      <div className={styles.infoWrap}>
        <img src={icon} alt="" className={styles.icon} />
        <div>{typeName}</div>
      </div>
      <div className={styles.infoWrap}>
        {
          isMultiple ? (
            <TimeslotsTooltipIcon className={styles.icon} />
          ) : (
            <DateIcon className={cn(styles.icon, styles.invertIcon)} />
          )
        }
        <div>{timeslotsCount} Timeslot{isMultiple ? 's' : ''}</div>
      </div>
      <div className={styles.infoWrap}>
        <ResolutionIcon className={cn(styles.icon, styles.invertIcon)} />
        <div>{resolution}px</div>
      </div>
      {
        looping && (
          <div className={styles.infoWrap}>
            <LoopingIcon className={cn(styles.icon, styles.invertIcon)} />
            <div>Looping {looping}</div>
          </div>
        )
      }
    </div>
  );

};

Info.propTypes = {
  place: PropTypes.node,
  typeIcon: PropTypes.string,
  typeName: PropTypes.node,
  timeslotsCount: PropTypes.number,
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  resolution: PropTypes.string,
  looping: PropTypes.string,
};

export default Info;
