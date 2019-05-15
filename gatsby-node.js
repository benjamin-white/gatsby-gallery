const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex : "\/posts/" } },
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
  `)
  .then(result => {

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

  })
}
