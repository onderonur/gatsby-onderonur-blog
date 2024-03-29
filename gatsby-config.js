/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
};

const settings = require('./src/util/site.json');

module.exports = {
  siteMetadata: settings.meta,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/common/`,
        name: 'common',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // If we don't do this, "createFilePath" will have
        // a relative file path in it.
        // We just want to get the file name to
        // create a proper slug in gatsby-node.
        // So, we omit this path.
        path: `${__dirname}/content/posts/`,
        name: 'blogPosts',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              tracedSVG: true,
              loading: 'lazy',
            },
          },
          {
            resolve: 'gatsby-remark-images-medium-zoom',
            options: {
              zIndex: 9999,
            },
          },
          `gatsby-remark-responsive-iframe`,
          // Code highlighting
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              // https://www.gatsbyjs.com/plugins/gatsby-remark-vscode/#themes
              theme: 'Dark+ (default dark)', // Or install your favorite theme from GitHub
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          // To embed URLs like CodePen etc.
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
        ],
      },
    },
    // https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/#using-google-fonts
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap`,
          },
        ],
      },
    },

    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Onur Önder`,
        short_name: `Onur Önder`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `static/assets/onderonur.jpg`,
      },
    },
    // To remove `gatsby-plugin-offline`
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/
    'gatsby-plugin-remove-serviceworker',
    // For Material-UI
    `gatsby-plugin-material-ui`,
  ],
};
