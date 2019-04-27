import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import tw from "tailwind.macro"

import Header from "./header"
import Hero from './hero'
import "../global.css"

const Body = styled.div`
  ${tw`font-sans z-50`}
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
    "header header header"
    "left content right"
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
        { (typeof window !== 'undefined' && window.location.pathname === '/') ? <Hero /> : null }
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
