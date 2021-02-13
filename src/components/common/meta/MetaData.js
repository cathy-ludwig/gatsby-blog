import React from 'react'
import PropTypes from 'prop-types'
import url from 'url'

import config from '../../../utils/siteConfig'
import settings from '../../../utils/settings'
import WebsiteMeta from './WebsiteMeta'

/**
* MetaData will generate all relevant meta data information incl.
* JSON-LD (schema.org), Open Graph (Facebook) and Twitter properties.
*
*/
const MetaData = ({
    title,
    description,
    image,
    location,
}) => {
    const canonical = url.resolve(config.siteUrl, location.pathname)

    title = title || config.siteTitleMeta || settings.title
    description = description || config.siteDescriptionMeta || settings.description
    image = image || settings.cover_image || null

    image = image ? url.resolve(config.siteUrl, image) : null

    return (
        <WebsiteMeta
            data={{}}
            canonical={canonical}
            title={title}
            description={description}
            image={image}
            type="WebSite"
        />
    )
}

MetaData.defaultProps = {
    data: {},
}

MetaData.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default MetaData
