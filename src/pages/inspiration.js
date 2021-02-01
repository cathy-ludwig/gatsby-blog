import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'
import { SimpleTabs } from "../components/common"

// Styles
import '../styles/app.css'

const Inspiration = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">A Few of My Favorite Things</h1>
                <SimpleTabs/>

                <section className="content-body">
                    <Link to="/">Return home</Link>
                </section>
            </article>
        </div>
    </Layout>
)

export default Inspiration

