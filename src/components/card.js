import React from 'react'

import { Link } from 'gatsby'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.div`
    ${tw`md:w-1/3 md:mx-2 md:mb-0 mx-0 mb-4 rounded overflow-hidden shadow-lg`}
`

const Head = styled.h2`
    ${tw`text-center font-thin py-4`}
`

const Body = styled.div`
    ${tw`pb-4 px-4 text-center`}
`

const Footer = styled.footer`
    ${tw`text-center p-4`}
`

const Card = (props) => {
    const listItems = props.items.map((item, index) =>
        <li key={index}>
            {item}
        </li>
    )

    return (
        <Container>
            <Head>{props.header}</Head>
            <Body>
                <ul className="list-reset mb-4">
                    {listItems}
                </ul>
            </Body>
            {
                (props.button === 'none') ?
                null :
                <Footer>
                    <Link
                        to={props.link}
                        className="rounded border-black border-2 p-3"
                    >{props.button}</Link>
                </Footer>
            }
        </Container>
    )
}

export default Card