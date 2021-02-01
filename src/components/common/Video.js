import React from "react"
import PropTypes from 'prop-types'

const Video = ({ videoSrcURL, videoTitle, author }) => (
    <div className="video">
        <h3>{videoTitle} - {author}</h3>
        <iframe
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
    </div>
)

Video.propTypes = {
    videoSrcURL: PropTypes.string,
    videoTitle: PropTypes.string,
    author: PropTypes.string,

}

export default Video
