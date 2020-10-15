import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import styled from "styled-components"
import tw from "tailwind.macro"

const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 60px;
  z-index: 10;
`

const Wrapper = styled.div`
  ${tw`w-full flex items-center justify-between flex-wrap bg-black`}
  height: 60px;
`

const Menu = styled.div`
  ${tw`bg-black inline-flex flex-col items-end lg:flex lg:items-center lg:justify-around lg:flex-row lg:w-1/5`};

  .active {
    ${tw`font-bold`}
  };
`

const A = styled(Link)`
  ${tw`text-white text-center no-underline p-3`}

  &:focus {
    ${tw`font-bold`}
  }

  &:hover {
    ${tw`font-bold`}
  }
`

function Header({ data }) {
  
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Nav>
          <Wrapper>
            <Img className="h-full ml-3" fixed={data.file.childImageSharp.fixed} />
            {/* <Menu>
              <A to="/" activeClassName="active">Home</A>
              <A to="/racers" activeClassName="">Racers</A>
            </Menu> */}
          </Wrapper>
        </Nav>
      )}
    />
  )
}

const query = graphql`
  query {
    file(relativePath: { eq: "signature.png"}) {
      childImageSharp {
        fixed(width: 100, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Header
