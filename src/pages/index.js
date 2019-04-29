import React from "react"

import Hero from '../components/hero'
import Card from '../components/card'

import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const H1 = styled.h1`
  ${tw`text-center text-5xl font-light my-6`}
`

const P = styled.p`
  ${tw`text-xl text-center my-4`}
`

const Cards = styled.section`
  ${tw`w-full flex md:flex-row flex-col justify-between`}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[]} />
    <Hero />
    <div className="lg:w-4/5 mx-auto p-4">
      <section>
        <H1>Welcome to the premire SoCal racing school.</H1>
        <P>Learn to race with Wally Pankratz, Belleville National Midget Hall of Fame and Legends of Ascot inductee.</P>
        <P>We specialize in Ford Focus Midgets, Wally helped write the book on them.</P>
        <P>Bring your own car and we'll help you tune it. Learn all the important aspects of car tuning and maintenance.</P>
      </section>

      <h2 className="mt-8 mb-4 text-center text-3xl font-thin">Learn about our pricing</h2>
      <Cards>
        <Card
          header="Beginner Tier"
          items={[
            'item 1',
            'item 2',
            'item 3',
          ]}
          button="Learn More"
        />
        <Card
          header="Intermediate Tier"
          items={[
            'item 1',
            'item 2',
            'item 3',
          ]}
          button="Learn More"
        />
        <Card
          header="Advanced Tier"
          items={[
            'item 1',
            'item 2',
            'item 3',
          ]}
          button="Learn More"
        />
      </Cards>
    </div>
  </Layout>
)

export default IndexPage
