import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image></Image>
    <h1 style={{textAlign: `center`}}>Hi, I'm Misaki.</h1>
    <p style={{textAlign: `center`}}>Web Developer in training. From Tokyo, now in Seattle.</p>
    <p>Hero component comes here</p>
    <p>Journey component comes here</p>
    <p>Value component comes here</p>
    <p>Contact component comes here</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
