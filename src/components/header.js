import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <div class="h-container">
  <header
    style={{
      //background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
    >
      <nav>
        <ul>
          <li><a href="/">INICIO</a></li>
          <li><a href="#">PUBLICACIONES</a></li>
          <li><a href="/el-juglar/">EL JUGLAR</a></li>
          <li><a href="/contact/">CONTACTO</a></li>
        </ul>
      </nav>

    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
