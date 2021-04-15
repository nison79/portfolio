/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "George Nikoglou Portfolio",
    description: "This is George Nikoglou portfolio and blog site, all my jobs projects and info about me. Also there is a blog about the things all like to write and share.",
    author: "georgenison@gmail.com",
    twitterUsername: "@gnikoglou79",
    image: "/twitter-img.png",
    siteUrl: "https://georgenikoglou-portfolio.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`jobs`,`projects`,`blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["200","400","500", "700","600","800","900"],
            },
            { family: "Raleway" ,
              variants: ["200","400","500", "700","600","800","900"],
            },
          ],
        },
      },
    },
  ],
}
