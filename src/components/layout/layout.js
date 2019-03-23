import React from 'react'
import Header from '../site-header/site-header'
import Footer from '../site-footer/site-footer'
import styles from './layout.module.css'

export default ({ children }) => (
  <div>
    <Header headerText="BW" />
    <main className={styles.pageBody}>
      {children}
      <Footer />
    </main>
  </div>
)
