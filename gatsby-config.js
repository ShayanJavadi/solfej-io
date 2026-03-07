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
          resolve: `gatsby-plugin-google-gtag`,
          options: {
              trackingIds: ["G-D638KQNXX8"],
              pluginConfig: {
                  head: true,
              },
              gtagConfig: {
                  send_page_view: true,
                  anonymize_ip: true,
              },
          },
      },
      {
          resolve: `gatsby-plugin-facebook-pixel`,
          options: {
              pixelId: '627048344833116',
          },
      },
      // Sitemap is generated manually in gatsby-node.js onPostBuild
      // because gatsby-plugin-sitemap v2.x doesn't support entryLimit/chunking
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
              sitemap: 'https://www.solfej.io/sitemap/sitemap-index-1.xml',
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
