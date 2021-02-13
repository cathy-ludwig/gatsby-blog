import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.markdownRemark

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css"/>
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        { post.frontmatter.feature_image.publicURL ?
                            <figure className="post-feature-image">
                                <img src={ post.frontmatter.feature_image.publicURL } alt={ post.frontmatter.title } />
                            </figure> : null }
                        <section className="post-full-content">
                            <h1 className="content-title">{post.frontmatter.title}</h1>
                            <h2>Written on {post.frontmatter.date} - {post.timeToRead} minute read</h2>

                            {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                date: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                feature_image: PropTypes.shape({
                    publicURL: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
            html: PropTypes.string.isRequired,
            timeToRead: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug }}) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        feature_image {
          publicURL
        }
        slug
      }
      html
      timeToRead
    }
  }
`
