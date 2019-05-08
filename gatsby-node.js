// const head = require('lodash/head')

const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
//
// exports.onCreateNode = ({ node, getNode, actions }) => {
//
//   if (node.internal.type === `MarkdownRemark`) {
//
//     const slug = createFilePath({ node, getNode, basePath: `_data/posts` })
//     const { createNodeField } = actions
//
//     createNodeField({
//       node,
//       name: `slug`,
//       value: head(slug.split('/')),
//     })
//
//   }
//
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `

).then(result => {

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/single-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.slug,
        prev: index === 0 ? '' : posts[index - 1].node.frontmatter.slug,
        next: index === (posts.length - 1) ? '' : posts[index + 1].node.frontmatter.slug
      },
    })
  })

})}
