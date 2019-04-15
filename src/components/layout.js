import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import tw from "tailwind.macro"

import Header from "./header"
import "../global.css"

const Body = styled.div`
  ${tw`font-sans`}
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
    "header header header"
    ". content ."
    "footer footer footer";
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
        <Header />
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
