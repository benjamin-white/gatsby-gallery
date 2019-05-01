// const { createFilePath } = require(`gatsby-source-filesystem`)
// const head = require('lodash/head')
//
// exports.onCreateNode = ({ node, getNode, actions }) => {
//
//   if (node.internal.type === `MarkdownRemark`) {
//
//     const slug = createFilePath({ node, getNode, basePath: `posts` })
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
const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/single-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: `/${node.frontmatter.slug}/`,
      },
    })
  })

})}
