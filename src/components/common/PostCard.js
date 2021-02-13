import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const PostCard = ({ post }) => {
    const url = `/${post.frontmatter.slug}/`
    const readingTime = `${post.timeToRead} ${post.timeToRead > 1 ? `minutes` : `minute`}`

    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                {post.frontmatter.feature_image.publicURL &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.frontmatter.feature_image.publicURL})` ,
                    }}></div>}
                <h2 className="post-card-title">{post.frontmatter.title}</h2>
            </header>
            <section className="post-card-excerpt">{post.excerpt}</section>
            <footer className="post-card-footer">
                <div className="post-card-footer-right">
                    <div>{readingTime}</div>
                </div>
            </footer>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        frontmatter: PropTypes.shape({
            slug: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            feature_image: PropTypes.shape({
                publicURL: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        excerpt: PropTypes.string.isRequired,
        timeToRead: PropTypes.string.isRequired,
    }).isRequired,
}

export default PostCard
