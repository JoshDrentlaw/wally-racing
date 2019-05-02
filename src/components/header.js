import React, { useState } from "react"
import { Link } from "gatsby"
import is from 'is_js'

import styled from "styled-components"
import tw from "tailwind.macro"

const Nav = styled.nav`
  ${tw`sticky flex items-center justify-between flex-wrap bg-black`}
  top: 0;
  height: 60px;
`

const Menu = styled.div`
  ${tw`w-full bg-black flex flex-col flex-grow items-end lg:flex lg:items-center lg:justify-end lg:flex-row lg:w-1/4`}

  z-index: -1;

  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transform: ${props => props.visible ? `translateY(0%)` : `translateY(-100%)` };
  transition: transform 200ms ease-out, visibility 200ms ease-out;

  .active {
    ${tw`font-bold`}
  }
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

const url = "https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/c_scale,h_50,e_outline:1/v1555171073/Wally%20Pankratz%20Racing%20School/WallyPankratz";

const Header = () => {
  const [visible, setVisible] = useState(((is.not.mobile) ? true : false));

  return (
    <Nav>
      <img src={url + (is.safari() ? '.png' : '.webp')} alt="Wally Pankratz signature" className="h-full ml-3" />
      <div className="block mr-3 md:hidden">
        <button id="hamburger" className="flex items-center px-3 py-2 border rounded border-white text-white" onClick={() => {setVisible(!visible)}}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <Menu visible={visible}>
        <A to="/" activeClassName="active">Home</A>
        <A to="/about/" activeClassName="active">About</A>
        <A to="/stats/" activeClassName="active">Stats</A>
        <A to="/pricing/" activeClassName="active">Pricing</A>
      </Menu>
    </Nav>
  )
}

export default Header
