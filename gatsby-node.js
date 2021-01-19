const path = require(`path`)

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `)

    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors)
    }

    // Extract query results
    const posts = result.data.allMarkdownRemark.edges

    // Load templates
    const indexTemplate = path.resolve(`./src/templates/index.js`)
    const postTemplate = path.resolve(`./src/templates/post.js`)
    const blogTemplate = path.resolve(`./src/templates/blog.js`)

    createPage({
        path: `/blog/`,
        component: blogTemplate,
    })
    createPage({
        path: `/`,
        component: indexTemplate,
    })

    // Create post pages
    posts.forEach(({ node }) => {
        // This part here defines, that our posts will use
        // a `/:slug/` permalink.
        node.url = `/${node.frontmatter.slug}/`

        createPage({
            path: node.url,
            component: postTemplate,
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.frontmatter.slug,
            },
        })
    })
}
