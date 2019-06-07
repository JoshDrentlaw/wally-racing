import React from "react"
import Img from 'gatsby-image'
import { graphql } from "gatsby"

import styled from 'styled-components'
import tw from 'tailwind.macro'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portrait = styled.div`
  ${tw`mt-4 mx-auto md:w-2/3 lg:w-1/2 border border-black rounded`}
`

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <section className="text-center mx-auto md:w-2/3 lg:w-1/2">
      <h1 className="font-thin my-4">About Wally Prankatz</h1>
      <p>Wally Pankratz started racing in 1970. Over his long career he won four Championships with 114 Main Event wins and many awards including induction into the Belleville National Midget Hall of Fame and the Legends of Ascot.  In addition, Wally collaborated with Steve Smith Autosports to develop the book "Midget Chassis Technology" for Midget racers.  This Chassis set up book is dedicated to introducing the racer to Midget racing while teaching the finer points of the set-up and racing in this class.</p>
      <Portrait>
        <Img fluid={data.file.childImageSharp.fluid} alt="Wally Pankratz teaches a new driver" />
        <div className="mt-4 p-4 flex flex-col justify-center items-center">
          <small className="text-left">Quote from Wally, something that will really make people want to meet and know the guy.</small>
          <h2 className="font-light self-end">- Wally Pankratz</h2>
        </div>
      </Portrait>
      <h2 className="font-thin my-4">About Wally Prankatz Racing School</h2>
      <p>The Ford Focus Midget Course is designed for drivers who want to learn the skills essential for Short Track Oval racing. Students will work "One on One" with Wally to understand and master corner entrance, car rotation, throttle pick up points, unwinding of the car, smooth inputs of throttle, brakes and steering. Thirteen on track sessions that make up 200 laps on a 1/4 mile pavement track.</p>
    </section>
  </Layout>
)

export const query = graphql`
  {
    file(relativePath: { eq: "WallyTeaching.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
