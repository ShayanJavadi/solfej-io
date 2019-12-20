module.exports = {
  siteMetadata: {
    title: `Solfej`,
    description: `The best new way to learn music theory and ear training`,
    author: `Shayan Javadi`,
    image: "/images/logo.png",
    url: "https://www.solfej.io",
    siteUrl: "https://www.solfej.io",
  },
  plugins: [
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              // The property ID; the tracking code won't be generated without it
              trackingId: "UA-150995686-1",
              head: true,
              anonymize: true,
          },
      },
      {
          resolve: `gatsby-plugin-facebook-pixel`,
          options: {
              pixelId: '627048344833116',
          },
      },
    `gatsby-plugin-sitemap`,
      {
          resolve: 'gatsby-plugin-robots-txt',
          options: {
              host: 'https://www.solfej.io',
              sitemap: 'https://www.solfej.io/sitemap.xml',
              policy: [{ userAgent: '*', allow: '/' }]
          }
      },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFB5B5`,
        theme_color: `#FFB5B5`,
        display: `minimal-ui`,
        icon: `src/images/logo-no-text.png`, // This path is relative to the root of the site.
      },
    },
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
