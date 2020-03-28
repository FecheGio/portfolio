module.exports = {
  siteMetadata: {
    title: `Fede Giobergia's portfolio`,
    description: ``,
    author: `@FecheGio`
  },
  plugins: [
    `gatsby-plugin-sass`,
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: 'https://gmail.us5.list-manage.com/subscribe/post?u=15e956080a41f301c18b679b9&amp;id=8bb8acd106', // add your MC list endpoint here; see instructions below
    //   },
    // }
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon:`./src/images/fechesinfondo.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`400`, `700`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    },`gatsby-plugin-offline`,
  ],
}
