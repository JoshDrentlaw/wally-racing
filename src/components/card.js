import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.div`
    ${tw`md:w-1/3 rounded overflow-hidden shadow-lg`}
`

const Head = styled.h2`
    ${tw`text-center font-thin py-4`}
`

const Body = styled.div`
    ${tw`pb-4 px-4 text-center`}
`

const Footer = styled.footer``

const Card = (props) => (
    <Container>
        <Head>{props.tier} Tier</Head>
        <Body>
            <ul className="list-reset mb-4">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <button className="rounded border-black border-2 p-3">Learn More</button>
        </Body>
        <Footer></Footer>
    </Container>
)

export default Card