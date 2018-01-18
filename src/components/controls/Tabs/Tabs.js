import React, { PropTypes } from 'react';
import cn from 'classnames';
import styles from './Tabs.scss';

const Tabs = ({ active, tabs, onChange, ...rest }) => (
  <div className={cn(styles.general, rest.className)}>
    {
      tabs.map(tab => (
        <div
          className={cn(styles.tab, { [styles.selected]: active === tab.id })}
          key={tab.id}
          onClick={() => onChange(tab.id)}
        >
          {tab.name}
        </div>
      ))
    }
    <div className={styles.underline} />
  </div>
);

export default Tabs;
