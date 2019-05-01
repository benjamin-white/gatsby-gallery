import React     from "react"
import { Link }  from 'gatsby'
import styles    from './card-image.module.css'

export default (props, index) => (

  <figure className={styles.cardImage} key={index}>
    <div className={styles.inner}>
      <span className={styles.overlay}>{props.title}</span>
      <img src={props.imageSrc} className={styles.image} alt="Gallery thumbnail" />
      <Link to={props.linkTo} className="u-fillLink"></Link>
    </div>
  </figure>

)
