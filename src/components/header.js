import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <nav className="py-2" style={{ gridArea: `header`, color: `black` }}>
    <img src="https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/c_scale,co_rgb:000000,e_colorize:100,h_50/v1555171073/Wally%20Pankratz%20Racing%20School/WallyPankratz.png" alt="Wally Pankratz signature" />
    <Link to="/">Home</Link>
    <Link to="/about/">About</Link>
    <Link to="/stats/">Stats</Link>
    <Link to="/pricing/">Pricing</Link>
  </nav>
)

export default Header
