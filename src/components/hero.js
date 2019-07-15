import React from "react"
import Img from 'gatsby-image'

import styled from 'styled-components'

const Wrapper = styled.div`
    height: calc(100vh - 60px);

    div {
        height: inherit;
        width: 100%;
    }
`

const HeadingWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    height: inherit;
    justify-content: space-between;
    left: 0;
    line-height: 0.8;
    mix-blend-mode: luminosity;
    padding: 1em;
    position: absolute;
    top: 60;
    z-index: 5;
`

const Heading = styled.h2`
    color: white;
    display: inline;
    font-size: calc(50px + (110 - 50) * ((100vw - 300px) / (1920 - 300)));
    text-align: ${props => props.align || "center"};
`

const Hero = (props) => (
    <Wrapper>
        <HeadingWrapper>
            <Heading align="left">Pardon<br />our<br />dirt.</Heading>
            <Heading align="right">New site<br />coming<br />soon.</Heading>
        </HeadingWrapper>
        <Img fluid={props.data} alt="Ford Focus Midget Car" />
    </Wrapper>
)

export default Hero