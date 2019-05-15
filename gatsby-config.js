module.exports = {
  siteMetadata: {
    title: `Ben White Portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/_data/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/_data/pages`
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`
    },
    `gatsby-transformer-remark`
  ]
}
