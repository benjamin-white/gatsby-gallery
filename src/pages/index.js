import CardImage from '../components/card-image/card-image'
import Layout from '../components/layout/layout'
import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {

  return (
    <Layout>
      <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
      <p>This is some general page text stuff</p>
      <div className="card-grid">
        {data.allMarkdownRemark.edges.map(node => ({
          imageSrc: node.node.frontmatter.featuredImage.publicURL,
          title: node.node.frontmatter.title,
          linkTo: 'http://overthere.yeah'
        })).map(data => CardImage(data))}
      </div>
    </Layout>
  )

}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            featuredImage {
              publicURL
            }
            attachments {
              publicURL
            }
          }
        }
      }
    }
  }
`
