import React from 'react'
import { Layout } from '../components/common'

const AboutPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Welcome to my Blog!</h1>
                <section className="content-body">
                    My name is Cathy and I work in the tech industry.<n/>
                    This is my blog.<n/>
                    Yadda yadda.
                </section>
            </article>
        </div>
    </Layout>
)

export default AboutPage
