import React    from 'react'
import { Link } from 'gatsby'
import styles   from './pagination.module.css'

export default props => {

  const attributes = {

    previous: {
      className: [
        styles.pagination,
        styles.paginationLeft,
        (!props.previous ? styles.paginationDisabled : '')
      ].join(' '),
      ...(!props.previous ? {onClick: ev => ev.preventDefault()} : {})
    },

    next: {
      className: [
        styles.pagination,
        styles.paginationRight,
        (!props.next ? styles.paginationDisabled : '')
      ].join(' '),
      ...(!props.next ? {onClick: ev => ev.preventDefault()} : {})
    }

  }

  return (
    <>
      <Link to={props.previous} {...attributes.previous}>Previous</Link>
      <Link to={props.next} {...attributes.next}>Next</Link>
    </>
  )

}
