import React from 'react'
import { Link } from 'gatsby'

export default props => {

  return (
    <>
      <Link to={props.previous}>Previous</Link>
      <Link to={props.next}>Next</Link>
    </>
  )

}
