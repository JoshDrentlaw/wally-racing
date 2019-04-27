import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const H1 = styled.h1`
  ${tw`text-center text-5xl font-light my-6`}
  grid-column: 2 / 5
`

const P = styled.p`
  ${tw`text-xl text-center my-4`}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[]} />
    <section>
      <H1>Welcome to the premire SoCal racing school.</H1>
      <P>Learn to race with Wally Pankratz, Belleville National Midget Hall of Fame and Legends of Ascot inductee.</P>
      <P>We specialize in Ford Focus Midgets.</P>
      <P>Bring your own car and we'll help you tune it</P>
    </section>
  </Layout>
)

export default IndexPage
