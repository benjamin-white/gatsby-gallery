import React     from "react"
import { Link }  from 'gatsby'
import styles    from './card-image.module.css'

export default props => (

  <figure>
    <div className={styles.inner}>
      <span className={styles.overlay}>{props.title}</span>
      <img src={props.imageSrc} className={styles.image} />
      <Link to={props.linkTo} className="u-fillLink"></Link>
    </div>
  </figure>

)
