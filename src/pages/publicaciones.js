import React from "react"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const PublicationsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            terraplanismo: file(relativePath: { eq: "TERRAPLANISMO.jpeg" }) {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
    `)
    return(
        <Layout>
            <SEO title="El Juglar" />
            <div class="b-container">
                <div class="content">
                    <SEO title="Fede Giobergia" />
                    <h1> <span class="highlight">PUBLICACIONES</span></h1>

                    <h3>Mis publicaciones en distintos medios:</h3>

                    <div class="card">
                            <Img 
                                fluid={data.terraplanismo.childImageSharp.fluid} 
                            />   
                            <div class="container">
                            <h4><b>"Mirá la gilada que tenemos que aclarar"</b></h4>
                            <p></p>
                        </div>
                    </div>


                    {/* <Link to="/page-2/">Go to page 2</Link> */}
                </div>
            </div>
        </Layout>
    )
}



export default PublicationsPage
