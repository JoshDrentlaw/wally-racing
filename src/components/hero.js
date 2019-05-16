import React from "react"
import is from 'is_js'

import styled from "styled-components"
import tw from "tailwind.macro"

const Img = styled.img`
    ${tw`md:h-screen w-full`}
`

const url = "https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1555381845/Wally%20Pankratz%20Racing%20School/shapeimage_1" + (is.safari() ? '.png' : '.webp');

const Hero = () => (
    <Img src={url} alt="Ford Focus Midget Car" />
)

export default Hero