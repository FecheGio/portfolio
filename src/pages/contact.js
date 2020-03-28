import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => (
  <Layout>
    <SEO title="El Juglar" />
    <div class="b-container">
      <div class="content">
        <SEO title="Fede Giobergia" />
        <h1> <span class="highlight">Contactame</span></h1>

        <h3>Podés contactarme por los siguientes canales:</h3>

        <a href="mailto:fedegiobergia@gmail.com" class="button">  EMAIL</a>
        <a href="instagram.com/fechegio" class="button">  INSTAGRAM</a>
        <a href="twitter.com/fechegio" class="button">  TWITTER</a>


        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </div>
  </Layout>
)



export default ContactPage
