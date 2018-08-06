module.exports = {
  siteMetadata: {
    title: 'Gatsby2',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    {
     resolve: `gatsby-plugin-google-fonts`,
     options: {
       fonts: [
         `open sans:600,400,300` // you can also specify font weights and styles
       ]
     }
   },
  ],
  pathPrefix: `/gatsby2`,
}
