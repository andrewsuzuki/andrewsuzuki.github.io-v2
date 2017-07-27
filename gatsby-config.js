module.exports = {
  siteMetadata: {
    title: 'Andrew Suzuki',
    author: 'Andrew Suzuki',
    homeCity: 'New Haven, CT',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: '',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Andrew Suzuki',
        short_name: 'Andrew Suzuki',
        icons: [
          // {
          //   src: '/logo.png',
          //   sizes: '1024x1024',
          //   type: 'image/png',
          // },
        ],
        start_url: '/',
        // background_color: 'white',
        // theme_color: 'white',
        // display: 'browser',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-nprogress',
  ],
}
