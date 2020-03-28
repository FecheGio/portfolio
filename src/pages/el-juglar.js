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
        <p>Es mi proyecto personal donde escribo para quien quiera leer. Se trata de newsletter mensual, donde todos los 29 envio una pieza literaria. Puede ser un relato, un cuento, poesía, no sé. Depende de la inspiración del momento y de lo que quiera y me salga escribir. Los textos no suelen ser largos, entre 700 y 1500 palabras. Arrancó el 29 de febrero del 2020 y podés leer la primera entrega <a href="https://us5.campaign-archive.com/?u=15e956080a41f301c18b679b9&id=5917d73201">acá</a>.</p>

        <h3>¿Por qué "El Juglar"?</h3>
        <p>Un juglar era un personaje la edad media que viajaba por las ciudades e iba por las calles y tabernas contando historias, recitando poesía y cantando canciones sobre las hazañas de los caballeros y héroes de la época. Retomando la figura del juglar, asumo el rol de un juglar moderno y todos los meses me aparezco por tu mail contando historias.</p>

        <h3>¿Dónde me suscribo?</h3>
        <a href="#" class="button">SUSCRIBITE</a>

        <h3>¿Puedo aportar $?</h3>
        <p>Eh... por el momento me da mucha vergüenza. Peeeero...</p>

        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </div>
  </Layout>
)



export default SecondPage