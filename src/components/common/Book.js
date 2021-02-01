import React from "react"
import PropTypes from 'prop-types'

const Book = ({ bookSrcURL, bookImage, bookTitle, author }) => (
    <div className="video">
        <h3>{bookTitle} - {author}</h3>
        <a href={bookSrcURL}>{bookSrcURL}</a>
    </div>
)

Book.propTypes = {
    bookSrcURL: PropTypes.string,
    bookImage: PropTypes.string,
    bookTitle: PropTypes.string,
    author: PropTypes.string,
}

export default Book
