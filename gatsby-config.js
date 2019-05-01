module.exports = {
  siteMetadata: {
    title: `Ben White Portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`
    },
    `gatsby-transformer-remark`
  ]
}
