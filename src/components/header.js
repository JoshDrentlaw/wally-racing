import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import tw from "tailwind.macro"

const Nav = styled.nav`
  ${tw`sticky bg-transparent z-50`}
  top: 0;
  height: 50px;
  grid-area: header;
`

const LinkContainer = styled.div`
  ${tw`relative inline-flex flex-col flex-grows items-center float-right lg:w-1/5 lg:flex-row`}

  .active {
    ${tw`font-bold`}
  }

  & a {
    ${tw`text-black text-center no-underline p-2 lg:sw-1/4`}

    &:focus {
      ${tw`font-bold`}
    }

    &:hover {
      ${tw`font-bold`}
    }
  }
`



const Header = () => (
  <Nav>
    <img src="https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/c_scale,co_rgb:000000,e_colorize:100,h_50/v1555171073/Wally%20Pankratz%20Racing%20School/WallyPankratz.webp" alt="Wally Pankratz signature" />
    <LinkContainer>
      <Link to="/" activeClassName="active">Home</Link>
      <Link to="/about/" activeClassName="active">About</Link>
      <Link to="/stats/" activeClassName="active">Stats</Link>
      <Link to="/pricing/" activeClassName="active">Pricing</Link>
    </LinkContainer>
  </Nav>
)

export default Header
