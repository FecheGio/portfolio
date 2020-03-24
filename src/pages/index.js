import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div class="container">
      <div class="content">
        <SEO title="Fede Giobergia" />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <h1> <span class="highlight">Fede Giobergia</span></h1>
        <p>Nostrud anim occaecat sunt anim tempor adipisicing cillum in laboris. Nulla aute commodo occaecat nisi commodo anim adipisicing. Proident do ullamco excepteur laborum qui veniam consectetur. Fugiat nulla consequat ullamco eu. Nisi anim esse et ipsum in dolor aute nulla elit ex deserunt. Irure nisi ex cupidatat velit aute excepteur fugiat cillum veniam id eu voluptate. Amet proident occaecat cillum fugiat eiusmod laborum irure velit minim occaecat nulla anim.</p>
        <p>Now go build something great.</p>


        <div class="card">
          <div class="container-card">
            <div style={{borderRadius: `15px`}}>
              <Image />
            </div>
            <h4><b>Sarasa</b></h4>
          </div>
        </div>

        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
