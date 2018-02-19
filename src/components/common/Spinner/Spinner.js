import React from 'react';

import styles from './Spinner.css';

export const Spinner = ({color='#fff'}) => (
  <div className={styles.Loader} style={{background: color}}>Loading...</div>
);
