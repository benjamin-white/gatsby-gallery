import React  from 'react'
import styles from './social-icons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,
         faBehance,
         faGithub,
         faInstagram
       } from '@fortawesome/free-brands-svg-icons'

export default () => {

  const socialLinks = [
    {href: 'https://www.behance.net/nvlnvl', icon: faBehance},
    {href: 'https://www.instagram.com/ben_nvlnvl/', icon: faInstagram},
    {href: 'https://github.com/benjamin-white', icon: faGithub},
    {href: 'https://twitter.com/ben_nvlnvl', icon: faTwitter}
  ];

  return (
    <>
      {socialLinks.map(link => (
        <a href={link.href} className={styles.socialIcons} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={link.icon} /></a>
      ))}
    </>
  )

}
