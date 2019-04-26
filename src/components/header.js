import React, { useEffect } from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import tw from "tailwind.macro"

const Nav = styled.nav`
  ${tw`sticky flex items-center justify-between flex-wrap bg-transparent z-50`}
  top: 0;
  height: 50px;
  grid-area: header;
`

const LinkContainer = styled.div`
  ${tw`w-full block flex-col flex-grow lg:flex lg:items-center lg:justify-end lg:flex-row lg:w-auto`}

  .active {
    ${tw`font-bold`}
  }

  & a {
    ${tw`text-white lg:text-black text-center no-underline p-2 lg:sw-1/4`}

    &:focus {
      ${tw`font-bold`}
    }

    &:hover {
      ${tw`font-bold`}
    }
  }
`

const Header = () => {
  useEffect(() => {
    const button = document.getElementById('hamburger');
    toggle(button.classList);
  })

  function toggle(el) {
    console.log(el);
  }

  return (
    <Nav>
      <img src="https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/c_scale,h_50,e_outline:1/v1555171073/Wally%20Pankratz%20Racing%20School/WallyPankratz.webp" alt="Wally Pankratz signature" className="mr-auto" />
      <div className="block mr-4 lg:hidden">
        <button id="hamburger" className="flex items-center px-3 py-2 border rounded border-black text-black">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <LinkContainer>
        <div className="flex flex-col items-end pr-2 bg-black lg:bg-transparent lg:w-1/4 lg:flex-row lg:justify-around">
          <Link to="/" activeClassName="active">Home</Link>
          <Link to="/about/" activeClassName="active">About</Link>
          <Link to="/stats/" activeClassName="active">Stats</Link>
          <Link to="/pricing/" activeClassName="active">Pricing</Link>
        </div>
      </LinkContainer>
    </Nav>
  )
}

export default Header
