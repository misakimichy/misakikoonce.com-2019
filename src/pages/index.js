import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

export default () => (
    <Layout>
        <main>
            <h1> Work</h1>
            <ul>
                <li><Link to="/works/work-a">Work A</Link></li>
                <li><Link to="/works/work-b">Work B</Link></li>
            </ul>
        </main>
    </Layout>
)