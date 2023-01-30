import path, { resolve } from "path"

async function turnPostsIntoPages({ graphql, actions }) {
  // 1. create a template in templates folder
  const postTemplate = path.resolve("./src/templates/Posts.js")
  // 2. query all posts
  const { data } = await graphql(`
    query postsQuery {
      posts: allWpPost(limit: 3) {
        nodes {
          title
          slug
        }
      }
    }
  `)
  console.log(data)
  // 3. loop over all posts and create a page for each post
  data.posts.nodes.forEach(post => {
    actions.createPage({
      // what is the url for this new page?`
      path: `recent-posts/${post.slug}`,
      component: postTemplate,
      context: {
        slug: post.slug,
      }
    })
  })
}

export async function createPages(params) {
  await Promise.all([turnPostsIntoPages(params)])
}
