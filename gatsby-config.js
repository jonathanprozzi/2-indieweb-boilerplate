/* eslint-disable quotes */
module.exports = {
  siteMetadata: {
    title: `Jonathan Prozzi`,
    description: `Jonathan Prozzi is a learner, teacher, technologist, musician, and design enthusiast. I'm passionate about empowering others through technology and creativity.`,
    tagline: `Learner. Technologist. Musician. Educator.`,
    author: `@jonathanprozzi`,
    position: `Director of Learning Design`,
    organization: `Digital Harbor Foundation`,
    url: `https://jonathanprozzi.net`,
    canonical: `https://microformats-test.netlify.com`,
    indieauthEndpoint: `https://indieauth.com/auth`,
    tokenEndpoint: ``,
    microsub: ``,
    micropub: ``,
    feedPath: `/posts/`,
    pingback: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
