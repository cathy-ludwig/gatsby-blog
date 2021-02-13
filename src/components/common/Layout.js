import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

import { Navigation } from '.'

// Styles
import '../../styles/app.css'

// Settings
import settings from '../../utils/settings'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ children, bodyClass, isHome }) => {
    const twitterUrl = settings.twitter ? `https://twitter.com/${settings.twitter.replace(/^@/, ``)}` : null
    const githubUrl = settings.github ? `https://github.com/${settings.github.replace(/^\//, ``)}` : null

    return (
        <>
            <Helmet>
                <html lang={settings.lang} />
                <style type="text/css">{`${settings.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <header className="site-head" style={{ ...settings.cover_image && { backgroundImage: `url(${settings.cover_image})` } }}>
                        <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link to="/"> </Link>
                                </div>
                                <div className="site-mast-right">
                                    { settings.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                    { settings.github && <a href={ githubUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/github.svg" alt="Github" /></a>}
                                </div>
                            </div>
                            { isHome ?
                                <div className="site-banner">
                                    <h1 className="site-banner-title">{settings.title}</h1>
                                    <p className="site-banner-desc">{settings.description}</p>
                                </div> :
                                null}
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    {/* The navigation items as setup in Ghost */}
                                    <Navigation data={settings.navigation} navClass="site-nav-item" />
                                </div>
                            </nav>
                        </div>
                    </header>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>

                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{settings.title}</Link> © 2021 &mdash; Published with <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a>
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation data={settings.navigation} navClass="site-foot-nav-item" />
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
}

export default DefaultLayout
