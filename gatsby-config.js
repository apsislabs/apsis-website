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
    ],
}
