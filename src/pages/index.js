import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const H1 = styled.h1`
  ${tw`text-center text-5xl font-light`}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[]} />
    <section>
      <H1>Welcome to the premire SoCal racing school</H1>
      <p className="text-center">Learn to race with Wally Pankratz</p>
    </section>
  </Layout>
)

export default IndexPage
