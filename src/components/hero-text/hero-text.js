import React from 'react'
import styles from './hero-text.module.css'

export default props => {

  return (
    <section className={styles.heroText+' u-siteWrap'}>
      <div>
        <h1>{props.textContent}</h1>
      </div>
    </section>
  )

}
