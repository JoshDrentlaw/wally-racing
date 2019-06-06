import React from "react"
import Img from 'gatsby-image'
import is from 'is_js'

import styled from "styled-components"
import tw from "tailwind.macro"

/* const Img = styled.img`
    ${tw`md:h-screen w-full`}
` */

const Hero = (props) => (
    <Img fixed={props.data} alt="Ford Focus Midget Car" />
)

export default Hero