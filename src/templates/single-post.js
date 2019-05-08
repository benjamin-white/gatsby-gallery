import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import HeroText from '../components/hero-text/hero-text'
import Pagination from '../components/pagination/pagination'
import styles from './single-post.module.css'

export default ({ data, pageContext }) => {

  const postData = data.markdownRemark.frontmatter
  const { next, prev } = pageContext

  return (
    <Layout>
      <section>
        <HeroText textContent={<h2>{postData.title}</h2>} />
        <div className={styles.postBody + ' u-siteWrap'}>
          {postData.attachments.map(a => <img src={a.publicURL} />)}
        </div>
        <Pagination previous={prev} next={next} />
      </section>
    </Layout>
  )

}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title,
        attachments {
          publicURL
        }
      }
    }
  }
`
