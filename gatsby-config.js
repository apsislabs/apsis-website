module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-link`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src`,
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
        {
          resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
}
