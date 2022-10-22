/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// fs dependency is a Node.js library for working with the filesystem.

// const fs = require("fs")
// // Path is a Node.js library with utilities for working with file paths.
// const path = require("path")

// // Use the onPostBuild Node API, which runs after the build has been completed.
// // Note that we have to use an async function here because the Remark plugin
// // writes the html property asynchronously.
// exports.onPostBuild = async ({ graphql }) => {
//   // Run the GraphQL query (from example above).
//   await graphql(`
//     {
//       posts: allMarkdownRemark(
//         filter: { fileAbsolutePath: { regex: "//src/db/posts//" } }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               title
//               date
//             }
//             fileAbsolutePath
//             html
//           }
//         }
//       }
//     }
//   `).then(result => {
//     // A reference to where we are going to put the files. Note that the public
//     // directory already exists because the build has been completed (since
//     // we're in the onPostBuild hook).
//     const postsPath = "./public/posts"

//     // Collect the data for all earworms. This simply digs into the query result
//     // and extracts the objects we care about.
//     const posts = result.data.posts.edges.map(({ node }) => node)

//     // If we don't already have the posts directory inside the public directory,
//     // create it.
//     if (!fs.existsSync(postsPath)) fs.mkdirSync(postsPath)

//     // Loop through each (filtered) result from the query and write them to
//     // file.
//     posts.map(post => {
//       // The slug is pulled from the name of the markdown file.
//       const slug = path.basename(
//         post.fileAbsolutePath,
//         path.extname(post.fileAbsolutePath)
//       )

//       // We then combine the frontmatter object with the slug and body (the
//       // converted HTML) to form our data object. This will give us the shape we
//       // want as mentioned when we wrote the original markdown file.
//       const data = {
//         ...post.frontmatter,
//         slug: slug,
//         body: post.html,
//       }

//       // Using the slug as the filename, write a file containing the data
//       // object, after converting it to JSON format.
//       fs.writeFileSync(`${postsPath}/${slug}.json`, JSON.stringify(data))
//     })
//   })
// }
