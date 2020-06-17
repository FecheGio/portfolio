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
            pichon: file(relativePath: { eq: "pichon-1-1024x628.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            pescado: file(relativePath: { eq: "pescado-idioma.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            minecraft: file(relativePath: { eq: "01_Uncensored_Library_island2.jpg" }) {
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
                        <a href="http://fueradepagina.com.ar/the-uncensored-library-romper-la-realidad-para-lograr-un-periodismo-libre/">
                            <div >
                                <Img style={{ maxHeight: `300px`, marginBottom: `1.45rem` }}
                                    fluid={data.minecraft.childImageSharp.fluid} 
                                />   
                            </div>
                            <div class="container-card">
                                <h3><b>The Uncensored Library: romper la realidad para lograr un periodismo libre</b></h3>
                                <p  style={{ color: `white` }} >El acceso libre a la información es un privilegio del que no gozan todos los países. En algunos los diarios, los medios independientes, los blogs y redes sociales están completamente bloqueados o prohibidos. En otros casos más extremos, los periodistas son perseguidos y tienen que trabajar de manera clandestina o someterse a escribir lo que los estados quieran.</p>
                            </div>
                        </a>
                    </div>

                    <div class="card">
                        <a href="https://www.revistamate.com.ar/2019/12/mira-la-gilada-que-tenemos-que-aclarar/">
                            <div >
                                <Img style={{ maxHeight: `300px`, marginBottom: `1.45rem` }}
                                    fluid={data.terraplanismo.childImageSharp.fluid} 
                                />   
                            </div>
                            <div class="container-card">
                                <h3><b>Mirá la gilada que tenemos que aclarar</b></h3>
                                <p  style={{ color: `white` }} >Hasta hace unos días, una de las peores cosas que me podía pasar era que alguien de mi circulo íntimo se me declare terraplanista. Lo creía imposible, pero dicen que los sueños se hacen realidad y las pesadillas son sueños. Pasó.</p>
                            </div>
                        </a>
                    </div>                    
                    
                    <div class="card">
                        <a href="https://www.revistamate.com.ar/2019/10/cinco-tiros/">
                            <div >
                                <Img style={{ maxHeight: `300px`, marginBottom: `1.45rem` }}
                                    fluid={data.pichon.childImageSharp.fluid} 
                                />   
                            </div>
                            <div class="container-card">
                                <h3><b>"Cinco tiros"</b></h3>
                                <p  style={{ color: `white` }} >Con el 38 corto que me había regalado uno de los muchachos del partido en la mano, escuché el ruido de los borcegos corriendo por el pasillo del hotel. Nunca me gustaron esos zapatos, me parecen pesados y duros.</p>
                            </div>
                        </a>
                    </div>

                    <div class="card">
                        <a href="https://revistamate.wordpress.com/2019/05/20/guia-de-supervivencia-para-ensenar-idiomas-si-nunca-ensenaste-nada/">
                            <div >
                                <Img style={{ maxHeight: `300px`, marginBottom: `1.45rem` }}
                                    fluid={data.pescado.childImageSharp.fluid} 
                                />   
                            </div>
                            <div class="container-card">
                                <h3><b>Guía de supervivencia para enseñar idiomas (si nunca enseñaste nada)</b></h3>
                                <p  style={{ color: `white` }} >En enero de 2018 me tiré de cabeza a irme a un intercambio cultural en el que tenía que enseñar español. Me dije a mi mismo “¿qué tan difícil puede ser si hablo español desde que nací?”. Spoiler: no sabía nada de español, mucho menos de enseñar algo.</p>
                            </div>
                        </a>
                    </div>

                    {/* <div class="card">
                        <a href="">
                            <div >
                                <Img style={{ maxHeight: `300px`, marginBottom: `1.45rem` }}
                                    fluid={data.pichon.childImageSharp.fluid} 
                                />   
                            </div>
                            <div class="container-card">
                                <h3><b></b></h3>
                                <p  style={{ color: `white` }} ></p>
                            </div>
                        </a>
                    </div> */}

                    {/* <Link to="/page-2/">Go to page 2</Link> */}
                </div>
            </div>
        </Layout>
    )
}



export default PublicationsPage
