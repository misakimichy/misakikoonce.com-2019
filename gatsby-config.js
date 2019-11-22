module.exports = {
    siteMetadata: {
        title: `Misaki Koonce`,
        description: `Misaki Koonce portfolio by Gatsby`,
        copyrights: 'Misaki Koonce',
        author: `@misakimichy`,
        logo: {
          src: '',
          alt: '',
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown-pages`,
                name: `markdown-pages`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography`,
            },
        },
    ]
}