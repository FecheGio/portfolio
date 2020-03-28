import { Link } from "gatsby"
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
      {/* <div class="tabs"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h3 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {`PUBLICACIONES`}
          </Link>
        </h3>

        <h3 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {`EL JUGLAR`}
          </Link>
        </h3>

      </div> */}

      <nav>
        <ul>
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
