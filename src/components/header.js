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
  ${props => console.log(`mobile: ${props.mobile} visible: ${props.visible}`)};

  ${tw`w-full bg-black flex flex-col items-end lg:flex lg:items-center lg:justify-around lg:flex-row lg:w-1/5`};

  visibility: ${props => props.mobile ? `${props.visible ? 'visible' : 'hidden'}` : 'visible' };

  transform: ${props => props.mobile ? `${props.visible ? `translateY(0%)` : `translateY(-100%)`}` : `translateY(0%)`};

  transition: all 200ms ease-out;

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

const url = 'https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/c_scale,h_50,e_outline:1/v1555171073/Wally%20Pankratz%20Racing%20School/WallyPankratz' + (is.safari() ? '.PNG' : '.webp');

const mobile = is.mobile() ? true : false;

function Header() {
  const [visible, setVisible] = useState(!mobile);
  console.log(visible);

  return (
    <Nav>
      <img src={url} alt="Wally Pankratz signature" className="h-full ml-3" />
      <div className="block mr-3 md:hidden">
        <button id="hamburger" className="flex items-center px-3 py-2 border rounded border-white text-white" onClick={() => setVisible(!visible)}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <Menu visible={visible} mobile={mobile}>
        <A to="/" activeClassName="active">Home</A>
        <A to="/about/" activeClassName="active">About</A>
        <A to="/stats/" activeClassName="active">Stats</A>
        <A to="/pricing/" activeClassName="active">Pricing</A>
      </Menu>
    </Nav>
  )
}

export default Header
