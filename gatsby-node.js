const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

const templatesPath = './src/templates';

function getNodeSlug({ node, getNode }) {
  const slug = createFilePath({ node, getNode });

  // We add the '/blog' prefix here for blog posts.
  return `/blog${slug}`;
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query NodeMarkdownQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              route
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create markdown pages
  const postEdges = result.data.allMarkdownRemark.edges;

  postEdges.forEach((post, index) => {
    const previous =
      index === postEdges.length - 1 ? null : postEdges[index + 1].node;
    const next = index === 0 ? null : postEdges[index - 1].node;

    const { route } = post.node.fields;

    createPage({
      path: route,
      component: path.resolve(`${templatesPath}/BlogPostPage.js`),
      // additional data can be passed via context
      context: {
        route,
        previous,
        next,
      },
    });
  });

  // Create blog-list pages
  const postsPerPage = 9;
  const pagesCount = Math.ceil(postEdges.length / postsPerPage);

  Array.from({ length: pagesCount }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
      component: path.resolve(`${templatesPath}/BlogPostsPage.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        pagesCount,
        currentPage: i + 1,
      },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `route`,
      // We use node.fields.route for page paths too.
      // route is set as page path above `createPage` function calls.
      value: getNodeSlug({ node, getNode }),
    });
  }
};
