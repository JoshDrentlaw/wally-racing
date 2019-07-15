import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import styled from "styled-components"
import tw from "tailwind.macro"

const Nav = styled.nav`
  ${tw`sticky z-10`}
  top: 0;
  height: 60px;
`

const Wrapper = styled.div`
  ${tw`w-full flex items-center justify-between flex-wrap bg-black`}
  height: 60px;
`

const Menu = styled.div.attrs(props => ({
  visibility: (props.visible ? 'visible' : 'hidden'),
  transform: (props.visible ? `translateY(0%)` : `translateY(-100%)`),
}))`
  ${tw`w-full block bg-black flex flex-col items-end lg:flex lg:items-center lg:justify-around lg:flex-row lg:w-1/5`};
  visibility: visible;

  @media(max-width: 1024px) {
    visibility: ${props => props.visibility };
    transform: ${props => props.transform };
    transition: all 200ms ease-out;
  }
  

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
  const [visible, setVisible] = useState();
  
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Nav>
          <Wrapper>
            <Img className="h-full ml-3" fixed={data.file.childImageSharp.fixed} />
            <div className="block mr-3 lg:hidden">
              <button id="hamburger" className="flex items-center px-3 py-2 border rounded border-white text-white" onClick={() => setVisible(!visible)}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
              </button>
            </div>
            <Menu visible={visible}>
              <A to="/" activeClassName="active">Home</A>
            </Menu>
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
