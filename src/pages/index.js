// import CardImage from '../components/card-image/card-image'
import HeroText    from '../components/hero-text/hero-text'
import CardGrid    from '../components/card-grid/card-grid'
import Layout      from '../components/layout/layout'
import React       from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {

  const cardsData = data.allMarkdownRemark.edges.map(node => ({
            imageSrc: node.node.frontmatter.featuredImage.publicURL,
            title: node.node.frontmatter.title,
            linkTo: '/'+node.node.frontmatter.slug
          }))

  const heroBlurb =
    <h2>
      Aesthetic explorations and experiments, mostly created with <a href="https://www.sidefx.com/" className="u-borderUnderline u-borderUnderline--hover" target="_blank" rel="noopener noreferrer">Houdini</a> &amp; <a href="https://www.blender.org/" className="u-borderUnderline u-borderUnderline--hover" target="_blank" rel="noopener noreferrer">Blender</a>.
    </h2>

  return (
    <Layout>
      {HeroText({ textContent: heroBlurb })}
      <CardGrid cardsData={cardsData} />
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
            slug
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
