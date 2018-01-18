import React from 'react';
import AddImageSquare from './AddImageSquare';
import styles from './markup.scss';

export default () => (
  <div style={{ height: '100%', width: '800px', display: 'flex', flexWrap: 'wrap', marginLeft: '400px' }}>
    <AddImageSquare />
    <AddImageSquare className={styles.test} />
    <AddImageSquare isLoading />
    <AddImageSquare className={styles.test} isLoading />
  </div>
);
