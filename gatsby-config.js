module.exports = {
  siteMetadata: {
    title: 'Paragon',
    description: `Style Framework for Samaritan Ministries`
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
  pathPrefix: `/paragon`,
}
