import React from 'react'
import Header from '../site-header/site-header'
import Footer from '../site-footer/site-footer'
import styles from './layout.module.css'

export default ({ children }) => (

  <div className={styles.pageWrap}>
    <div>
      <Header />
      <main className={styles.pageBody}>
        {children}
      </main>
    </div>
    <Footer />
  </div>

)
