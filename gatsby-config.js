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
      {
          resolve: `gatsby-plugin-sitemap`,
          options: {
              // Exclude specific pages or groups of pages using glob parameters
              // See: https://github.com/isaacs/minimatch
              // The example below will exclude the single `path/to/page` and all routes beginning with `category`
              query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
              serialize: ({ site, allSitePage }) =>
                  allSitePage.edges.map(edge => {
                      return {
                          url: site.siteMetadata.siteUrl + edge.node.path,
                          changefreq: `daily`,
                          priority: 0.7,
                      }
                  })
          }
      },
      {
          resolve: `gatsby-plugin-canonical-urls`,
          options: {
              siteUrl: `https://www.solfej.io`,
              stripQueryString: true,
          },
      },
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
    `gatsby-transformer-remark`,
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
