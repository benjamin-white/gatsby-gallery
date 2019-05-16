import React       from 'react'
import { graphql } from 'gatsby'
import Layout      from '../components/layout/layout'
import TextBlock   from '../components/text-block/text-block'

export default ({ data }) => {

  return (
    <Layout>
      <div className="u-siteWrap">
        <TextBlock content={data.markdownRemark.frontmatter.content} />
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
