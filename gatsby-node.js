// const path = require('path')

// create pages dynamically
// exports.createPages = async ({graphql, actions}) => {
//   const {createPage} = actions
//   const result = await graphql(`
//     query GetProjects {
//       projects: allContentfulProject {
//         nodes {
//           slug
//         }
//       }
//     }
//   `)

//   result.data.projects.nodes.forEach((project) => {
//     createPage({
//       path: `/projects/${project.slug}`,
//       component: path.resolve('src/templates/project-template.js'),
//       context: {
//         slug: project.slug
//       }
//     })
//   })
// }

const rimraf = require('rimraf');

const PUBLIC_FOLDER = `${__dirname}/public`;

exports.onPreBuild = () => {
  // empty /public folder
  rimraf.sync(PUBLIC_FOLDER + '/*');
};