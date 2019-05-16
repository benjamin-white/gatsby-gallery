import React  from 'react'
import styles from './text-block.module.css'

export default props =>
  <div className={styles.textBlock} dangerouslySetInnerHTML={{__html: props.content}}></div>
