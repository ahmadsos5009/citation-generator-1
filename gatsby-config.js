module.exports = {
  siteMetadata: {
    title: "Citation Generator",
    description: "Create Citation based on CSL styles",
    author: "Ahmad Souqi",
    siteUrl: process.env.APP_URL,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "citation-generator",
        short_name: "cg",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/mdx`,
      },
    },
    "gatsby-theme-material-ui",
    "gatsby-plugin-mdx",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-typescript",
    "eslint-config-airbnb",
    "gatsby-plugin-styled-components",
  ],
}
