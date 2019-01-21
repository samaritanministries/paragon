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
   {
     resolve: `gatsby-remark-prismjs`,
     options: {
       classPrefix: "language-",
       inlineCodeMarker: null,
       aliases: {},
       showLineNumbers: false,
       noInlineHighlight: false,
     },
   },
  ],
  pathPrefix: `/paragon/`,
}
