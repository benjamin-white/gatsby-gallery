import React from 'react'
import styles from './site-footer.module.css'

export default () => (
  <footer className={styles.siteFooter}>
    <section>
      <div>&copy; {new Date().getFullYear()}</div>
      <div>Say hello, <a href="mailto:benjaminwhite@live.co.uk" className="u-borderUnderline u-borderUnderline--hover">mailto:benjaminwhite@live.co.uk</a></div>
    </section>
  </footer>
)
