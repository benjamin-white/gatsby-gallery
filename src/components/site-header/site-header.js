import React  from 'react'
import styles from './site-header.module.css'
import partition from 'lodash/partition'

export default props => {

  // console.log(partition([1, 2, 3, 4], n => n % 2));

  return (
    <header className={styles.siteHeader}>
      <div className={styles.uInner}>
        <figure>{ props.headerText }</figure>
        <span>social, etc...</span>
      </div>
    </header>
  );

}
