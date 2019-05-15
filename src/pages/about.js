import React       from 'react'
import { graphql } from 'gatsby'
import Layout      from '../components/layout/layout'

export default ({ data }) => {

  return (
    <Layout>
      <div className="u-siteWrap">
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.frontmatter.content}}></div>
      </div>
    </Layout>
  )

}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      frontmatter {
        content
      }
    }
  }
`
