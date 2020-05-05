import React from "react"
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
        <p>Es mi proyecto personal donde escribo para quien quiera leer. Se trata de newsletter mensual, donde todos los 29 envio una pieza literaria. Puede ser un relato, un cuento, poesía, no sé. Depende de la inspiración del momento y de lo que quiera y me salga escribir. Los textos no suelen ser largos, entre 700 y 1500 palabras.</p>

        <h3>¿Por qué "El Juglar"?</h3>
        <p>Un juglar era un personaje de la edad media que viajaba por las ciudades e iba por las calles y tabernas contando historias, recitando poesía y cantando canciones sobre las hazañas de los caballeros y héroes de la época. Retomando la figura del juglar, asumo el rol de un juglar moderno y todos los meses me aparezco por tu mail contando historias.</p>

        <h3>¿Dónde me suscribo?</h3>
        <a href="https://gmail.us5.list-manage.com/subscribe?u=15e956080a41f301c18b679b9&id=8bb8acd106" class="button">SUSCRIBITE</a>

        <h3>Ediciones</h3>
        <a href="https://us5.campaign-archive.com/?u=15e956080a41f301c18b679b9&id=5917d73201" class="button">PRIMERA</a>
        <a href="https://us5.campaign-archive.com/?u=15e956080a41f301c18b679b9&id=ee8a5c9fcd" class="button">SEGUNDA</a>
        <a href="https://mailchi.mp/9060b7d67898/el-juglar-3" class="button">TERCERA</a>

        <h3>¿Me comprás un café?</h3>
        <p>Hacer El Juglar me toma varias horas semanales, varios mates y varios cafés. Lo hago por amor al arte, por eso, si queres, podés invitarme un café. O un par.</p>
        <a href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=166424093-ee96fa77-29ae-4dfe-ba8f-bd6f13b35302" class="button">1 CAFÉ</a>
        <a href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=166424093-539763c8-667c-426c-bd5c-8e451d60bcaf" class="button">2 CAFÉS</a>



        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </div>
  </Layout>
)



export default SecondPage
