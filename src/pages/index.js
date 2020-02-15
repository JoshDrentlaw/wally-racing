import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from '@sanity/block-content-to-react'

// import Hero from '../components/hero'
// import Card from '../components/card'
import Contact from '../components/contact'

import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Section = styled.section`
    ${tw`mb-12`}

    align-items: center;
    display: flex;
    flex-direction: column;
`

const UlContainer = styled.div`
    width: 80vw;
    margin: 0 auto;

    @media(min-width: 568px) {
        width: 75vw;
    }

    @media(min-width: 768px) {
        width: 65vw;
    }

    @media(min-width: 1024px) {
        width: 40vw;
    }

    ul {
        ${tw`text-xl my-4`}
        text-align: left;
        padding-left: 5vw;
    }
`

const H1 = styled.h1`
    ${tw`text-center text-5xl font-light my-4`}
`

const P = styled.p`
    ${tw`text-xl my-4`}

    text-align: ${props => props.align || "center"};
`

/* const Cards = styled.section`
    ${tw`w-full flex md:flex-row flex-col justify-between`}
` */

const VideoContainer = styled.div`
    width: calc(100% - 1rem);
    height: 0;
    padding-top: 56.25%;
    margin: 0.5rem auto 0.5rem;
    position: relative;

    iframe {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
    }
`

const serializers = {
    types: {
        block(props) {
            switch (props.node.style) {
                case 'normal':
                    return <P>{props.children}</P>
                case 'h1':
                    return <H1>{props.children}</H1>
                case 'h2':
                    return <h2>{props.children}</h2>
                case 'h3':
                    return <h3>{props.children}</h3>
                case 'h4':
                    return <h4>{props.children}</h4>
                case 'blockquote':
                    return <blockquote>{props.children}</blockquote>
                default:
                    return <P>{props.children}</P>
            }
        }
    },
    list: function block(props) {
        return (
            <UlContainer>
                <ul>{props.children}</ul>
            </UlContainer>
        )
    }
}

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home | Wally Prankatz Racing School" keywords={[
            "wally",
            "pankratz",
            "wally pankratz",
            "racing",
            "school",
            "racing school",
            "pankratz racing",
            "wally pankratz racing school",
            "socal",
            "socal racing school",
            "la racing",
            "la racing school",
            "la midget racecar",
            "midget racecar",
            "racecar school",
            "midget racecar school",
            "midget racecar school socal",
        ]} />
        <div className="lg:w-4/5 mx-auto p-4">
            <Section>
                <H1>{data.sanityPage.title}</H1>
                <P>{data.sanityPage.subHeading}</P>
                <Img fixed={data.sanityPage.mainImage.asset.fixed} alt="Wally Pankratz at Ventura Raceway." />
                <BlockContent blocks={data.sanityPage._rawBody} serializers={serializers} />
            </Section>

            <Section style={{ maxWidth: "640px", margin: "0 auto" }}>
                <VideoContainer>
                    <iframe src={data.sanityPage.video} frameBorder="0" allow="autoplay; fullscreen" title={data.sanityPage.videoTitle} allowFullScreen></iframe>
                </VideoContainer>
            </Section>

            <Section>
                <h2 className="mt-8 mb-4 text-center text-3xl font-thin">Contact Us<br />{data.sanityPage.contactNumber}</h2>
                <Contact />
            </Section>
        </div>
    </Layout>
)

export const query = graphql`
    query {
        sanityPage(page: {eq: "Home Page"}) {
            title
            subHeading
            mainImage {
                asset {
                    fixed(width: 300) {
                        ...GatsbySanityImageFixed
                    }
                }
            }
            _rawBody(resolveReferences: {maxDepth: 10})
            video
            videoTitle
            contactNumber
        }
    }
`

export default IndexPage
