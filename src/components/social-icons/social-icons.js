import React  from 'react'
import styles from './social-icons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,
         faBehance,
         faGithub,
         faInstagram
       } from '@fortawesome/free-brands-svg-icons'

export default () => {

  return (
    <>
      <a href="https://twitter.com" className={styles.socialIcons}><FontAwesomeIcon icon={faBehance} /></a>
      <a href="https://twitter.com" className={styles.socialIcons}><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://twitter.com" className={styles.socialIcons}><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://twitter.com/ben_nvlnvl" className={styles.socialIcons}><FontAwesomeIcon icon={faTwitter} /></a>
    </>
  )

}
