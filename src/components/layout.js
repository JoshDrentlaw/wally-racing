import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import tw from "tailwind.macro"

import Header from "./header"
import "../global.css"

const Body = styled.div`
  ${tw`font-sans`}
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
        <main className="min-w-vw max-w-vw">{children}</main>
        <footer></footer>
      </Body>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
