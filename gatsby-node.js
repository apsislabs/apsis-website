// const path = require("path");
// const { createFilePath } = require("gatsby-source-filesystem");
// const createPaginatedPages = require("gatsby-paginate");
// const _ = require("lodash");

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;
//   return new Promise((resolve, reject) => {
//     const blogPost = path.resolve("./src/templates/blog-post.js");
//     resolve(
//       graphql(
//         `
//           {
//             allMarkdownRemark(
//               sort: { order: DESC, fields: [frontmatter___date] }
//               limit: 1000
//             ) {
//               edges {
//                 node {
//                   id
//                   excerpt(pruneLength: 400)
//                   fields {
//                     slug
//                   }
//                   frontmatter {
//                     title
//                     date
//                     author
//                     path
//                     date
//                     image {
//                       childImageSharp {
//                         fluid(maxWidth: 800) {
//                           src
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors);
//           reject(result.errors);
//         }
//         createPaginatedPages({
//           edges: result.data.allMarkdownRemark.edges,
//           createPage: createPage,
//           pageTemplate: "src/templates/blog.js",
//           pageLength: 5,
//           pathPrefix: "blog",
//           buildPath: (index, pathPrefix) =>
//             index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}` // This is optional and this is the default
//         });
//         // Create blog posts pages.
//         _.each(result.data.allMarkdownRemark.edges, edge => {
//           createPage({
//             path: edge.node.fields.slug,
//             component: blogPost,
//             context: {
//               slug: edge.node.fields.slug
//             }
//           });
//         });
//       })
//     );
//   });
// };

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode });
//     createNodeField({
//       name: `slug`,
//       node,
//       value
//     });
//   }
// };
