require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Wally Pankratz Racing School`,
    description: `Wally Pankratz Racing School is the premire SoCal midget racecar school.`,
    author: `Josh Drentlaw`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wally Prankatz Racing School`,
        short_name: `Wally Prankatz`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/wpFavicon.PNG`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-cloudinary',
      options: {
          cloudName: process.env.CLOUD_NAME,
          apiKey: process.env.API_KEY,
          apiSecret: process.env.API_SECRET,
          maxResults: 100,
          resourceType: `image`,
          type: `upload`,
          prefix: `wally-racing/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-netlify',
  ],
}
