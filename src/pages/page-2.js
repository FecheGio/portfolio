import React from "react"
import { Link } from "gatsby"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="El Juglar" />
    <div class="container">
      <div class="content">
        <SEO title="Fede Giobergia" />
        <h1> <span class="highlight">El Juglar</span></h1>

        <h3>¿Qué es El Juglar?</h3>

        <p>Nostrud anim occaecat sunt anim tempor adipisicing cillum in laboris. Nulla aute commodo occaecat nisi commodo anim adipisicing. Proident do ullamco excepteur laborum qui veniam consectetur. Fugiat nulla consequat ullamco eu. Nisi anim esse et ipsum in dolor aute nulla elit ex deserunt. Irure nisi ex cupidatat velit aute excepteur fugiat cillum veniam id eu voluptate. Amet proident occaecat cillum fugiat eiusmod laborum irure velit minim occaecat nulla anim.</p>
        <p>Now go build something great.</p>

        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </div>
  </Layout>
)



export default SecondPage
