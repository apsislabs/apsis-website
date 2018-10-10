module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
            pathToConfigModule: `src/utils/typography.js`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `pages`,
            path: `${__dirname}/src/pages/blog_posts`,
          },
        },
        {
          resolve: 'gatsby-transformer-remark',
          options: {
            plugins: [
              {
                resolve: 'gatsby-remark-images',
                options: {
                  quality: 90,
                },
              },
            ],
          },
        },
    ],
}
