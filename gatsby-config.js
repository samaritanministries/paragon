module.exports = {
  siteMetadata: {
    title: "Paragon",
    description: "Style Framework for Samaritan Ministries"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "open sans:600,400,300" // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: "gatsby-remark-prismjs",
      options: {
        classPrefix: "language-",
        inlineCodeMarker: null,
        showLineNumbers: false,
        noInlineHighlight: false
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Paragon Framework",
        short_name: "Paragon",
        start_url: "/",
        background_color: "#EDEDED",
        theme_color: "#28336D",
        display: "standalone",
        icon: "./src/img/favicon.svg", // This path is relative to the root of the site.
        include_favicon: true // Include favicon
      }
    }
  ]
};
