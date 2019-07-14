import React from "react"
import { graphql } from "gatsby"

import Hero from '../components/hero'
import Card from '../components/card'
import Contact from '../components/contact'

import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Section = styled.section`
  ${tw`mb-12`}
`

const H1 = styled.h1`
  ${tw`text-center text-5xl font-light my-4`}
`

const P = styled.p`
  ${tw`text-xl text-center my-4`}
`

const Cards = styled.section`
  ${tw`w-full flex md:flex-row flex-col justify-between`}
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[
      "wally",
      "pankratz",
      "wally pankratz",
      "racing",
      "school",
      "racing school",
      "wally pankratz racing school",
      "socal",
      "socal racing school"
    ]} />
    <Hero className="" data={data.file.childImageSharp.fluid} />
    <div className="lg:w-4/5 mx-auto p-4">
      <Section>
        <H1>Welcome to the premire SoCal racing school.</H1>
        <P>Learn to race with Wally Pankratz, Belleville National Midget Hall of Fame and Legends of Ascot inductee.</P>
        <P>We specialize in Ford Focus Midgets, Wally helped write the book on them.</P>
        <P>Bring your own car and we'll help you tune it. Learn all the important aspects of car tuning and maintenance.</P>
      </Section>

      <Section>
        <h2 className="mb-4 text-center text-3xl font-thin">Learn about our pricing</h2>
        <Cards>
          <Card
            header="Beginner Tier"
            items={[
              'item 1',
              'item 2',
              'item 3',
            ]}
            button="Learn More"
            link="/pricing/#beginner"
          />
          <Card
            header="Intermediate Tier"
            items={[
              'item 1',
              'item 2',
              'item 3',
            ]}
            button="Learn More"
            link="/pricing/#intermediate"
          />
          <Card
            header="Advanced Tier"
            items={[
              'item 1',
              'item 2',
              'item 3',
            ]}
            button="Learn More"
            link="/pricing/#advanced"
          />
        </Cards>
      </Section>
      
      <Section>
        <h2 className="mt-8 mb-4 text-center text-3xl font-thin">Contact Us</h2>
        <Contact />
      </Section>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "FordMidget.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
