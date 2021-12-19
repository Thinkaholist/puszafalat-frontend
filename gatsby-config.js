module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Puszafalat',
  },
  plugins: [
    {
      resolve: `@slixites/gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Grandstander\:400,400i,500,700,800`,
          `Truculenta\:400,400i,500,700,800`,
          `Alegreya\:400,400i,500,700,800`,
          `Domine\:400,400i,500,700,800`,
        ],
        display: 'swap',
        preconnect: true,
        attributes: {
          rel: 'stylesheet preload prefetch',
          as: 'style',
        },
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '6h8tota2',
        dataset: 'production',
        watchMode: process.env.NODE_ENV === 'development',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        // Sanity project info (required)
        projectId: '6h8tota2',
        dataset: 'production',
      },
    },
  ],
};
