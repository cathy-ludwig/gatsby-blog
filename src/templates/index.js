import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import { Layout, PostCard } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location }) => {
    const posts = data.allMarkdownRemark.edges

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    <article className="content" style={{ textAlign: `center` }}>
                        <div className="circular--square">
                            <img src="images/cathy-ziggy.jpg"/>
                        </div>
                        <h1 className="content-title">Welcome!</h1>
                        <section className="content-body">
                            My name is Cathy and I'm a software developer, small business owner, aunt to the 10
                            cutest nieces and nephews, wife to a superstar basketball coach, dog-momma to a
                            chocolate lab named Ziggy, vegan, and most recently community activist. My biggest goal for
                            this site is to grow my technical and writing skills. If it helps others along the way, that
                            would be fantastic. My blog will focus on a few things: tutorial style technical posts, my
                            thoughts on software team dynamics, running a software company, and promoting women in STEM.
                            All of the projects that have helped me grow my technical skills can be found in the
                            Projects section.<br/>
                        </section>
                        <hr/>
                    </article>
                </div>
                <div className="container">
                    <h3 className="content-title">Recent Blog Posts</h3>
                    <section className="post-feed">
                        {posts.slice(0, 3).map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                    <section>
                        <Link to="/blog/">Check out more...</Link>
                    </section>
                    <hr/>
                </div>
                <div className="container">
                    <h3 className="content-title">My 2021 Goals</h3>
                    <div>
                        <img src="images/2021-goals.png"/>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <h3 className="content-title">Recent Projects</h3>
                    <hr/>
                </div>
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
query GhostPostQuery {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        excerpt
        timeToRead
        frontmatter {
          color
          date
          feature_image {
            publicURL
          }
          slug
          title
        }
      }
    }
  }
}
`
