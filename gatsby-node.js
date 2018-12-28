const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                title
                categories
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          // path: `/${node.frontmatter.categories[0].toLowerCase()}${
          //   node.frontmatter.slug
          // }`,
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve("./src/components/postlayout.js"),
          context: {
            slug: node.frontmatter.slug,
            categories: node.frontmatter.categories
          }
        });
      });
    });
    resolve();
  });
};
