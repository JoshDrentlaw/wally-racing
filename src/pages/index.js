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

  p {
    ${tw`text-xl my-4`}

    text-align: ${props => props.align || "center"};
  }

  ul {
    ${tw`text-xl my-4`}
    text-align: left;
    width: 40vw;
    margin: 0 auto;
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
    block (props) {
      switch (props.node.style) {
        case 'normal':
          return <p>{props.children}</p>
        case 'h1':
          return <h1>{props.children}</h1>
        case 'h2':
          return <h2>{props.children}</h2>
        case 'h3':
          return <h3>{props.children}</h3>
        case 'h4':
          return <h4>{props.children}</h4>
        case 'blockquote':
          return <blockquote>{props.children}</blockquote>
        default:
          return <p>{props.children}</p>
      }
    }
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
        {/* <P>Wally Pankratz started racing in 1970. Over his long career he won four Championships with 114 Main Event wins and many awards including induction into the Belleville National Midget Hall of Fame and the Legends of Ascot.  In addition, Wally collaborated with Steve Smith Autosports to develop the book <a href={bookLink} target="_blank" rel="noopener noreferrer">"Midget Chassis Technology"</a> for Midget racers.  This Chassis set up book is dedicated to introducing the racer to Midget racing while teaching the finer points of the set-up and racing in this class.</P>
        <P>The Ford Focus Midget Course is designed for drivers who want to learn the skills essential for Short Track Oval racing. Students will work "One on One" with Wally to understand and master corner entrance, car rotation, throttle pick up points, unwinding of the car, smooth inputs of throttle, brakes and steering.</P>
        <P align="left">
          Also available:
          <ul>
            <li>Corporate Promotions</li>
            <li>Night Time Sessions</li>
            <li>Set-up Classes (Bring your own car and improve your set-up)</li>
          </ul>
        </P> */}
      </Section>

      <Section style={{maxWidth: "640px", margin: "0 auto"}}>
        <VideoContainer>
          <iframe src="https://player.vimeo.com/video/353074662" frameBorder="0" allow="autoplay; fullscreen" title="Wally Pankratz Racing School" allowFullScreen></iframe>
          <p><a href="https://vimeo.com/353074662">Wally Pankratz Racing School</a> from <a href="https://vimeo.com/kingmediaco">King Media Co</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </VideoContainer>
      </Section>
      
      <Section>
        <h2 className="mt-8 mb-4 text-center text-3xl font-thin">Contact Us<br />(714) 749-4817</h2>
        <Contact />
      </Section>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    sanityPage(page: {eq: "Home Page"}, _rawBody: {}) {
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
    }
  }
`

export default IndexPage
