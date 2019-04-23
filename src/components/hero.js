import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

const Img = styled.img`
    ${tw`h-screen w-full`}
    grid-area: 1 / 1 / 2 / -1;
`

const Hero = () => (
    <Img src="https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1555381845/Wally%20Pankratz%20Racing%20School/shapeimage_1.webp" alt="Ford Focus Midget Car" />
)

export default Hero