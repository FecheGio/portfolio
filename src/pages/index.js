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
        <h3>¿Quién soy?</h3>

        <p>Soy Fede. Soy estudiante de comunicación y hago trabajo freelance de community manager y redactor de contenido. Trabajé casi dos años de desarrollador full stack, pero siempre me incliné al front end. También formé parte de grupos de desarrollo de videojuegos, como programador, como modelador 3D y como guionista. Me apasiona la tecnología y la literatura. De vez en cuando publico en Revista Mate.</p>

        <h3>¿Qué hago?</h3>
        <p>En mi tarea de community manager hago manejo de redes sociales, fotos, ediciones de video, flyers. Como redactor de contenido hago comunicación institucional, redacción creativa y corrección de textos. Por mi parte escribí algunas publicaciones, periodísticas y literarias, para Revista Mate.</p>
        
        <h3>Mi newsletter</h3>
        <p></p>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
