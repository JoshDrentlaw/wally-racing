import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import tw from "tailwind.macro"

import Header from "./header"
import "../global.css"

const Body = styled.div`
  display: grid;
  template-grid-areas: 
    "header header header"
    ". content ."
    ". content ."
    "footer footer footer"
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Body>
        <Header siteTitle={data.site.siteMetadata.title} style={{ gridArea: `header` }} />
        <main style={{ gridArea: `content` }}>{children}</main>
        <footer style={{ gridArea: `footer` }}></footer>
      </Body>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
