import React from 'react'
import styles from './hero-text.module.css'

export default props => {

  return (
    <section className={styles.heroText+' u-siteWrap'}>
      <div>
        {props.textContent}
      </div>
    </section>
  )

}
