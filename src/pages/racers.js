import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

// import Hero from '../components/hero'
// import Card from '../components/card'

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

const H1 = styled.h1`
    ${tw`text-center text-5xl font-light my-4`}
`

/* const Cards = styled.section`
    ${tw`w-full flex md:flex-row flex-col justify-between`}
` */

const RacerListContainer = styled.div`
    
`

const RacerList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const RacerListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 2em;
    }
`

const A = styled(Link)`
    color: black;

    &:active, &:hover, &:visited, &:link {
        color: black;
        text-decoration: none;
        text-align: center;
    }
`

const Image = styled(Img)`
`

const RacersPage = ({ data }) => (
    <Layout>
        <SEO title="Racers | Wally Prankatz Racing School" keywords={[
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
                <H1>School Racers</H1>
                <RacerListContainer>
                    <RacerList>
                        {data.allSanityRacers.edges.map(({node}, i) => (
                            <RacerListItem key={i}>
                                <A to={`/racers/${node.url.current}`} >
                                    <div>
                                        <Image fixed={node.profile.racerImage.asset.fixed} alt={`${node.profile.racerName} profile picture`} />
                                        <h2 style={{fontWeight: 200}}>{node.profile.racerName}</h2>
                                    </div>
                                </A>
                            </RacerListItem>
                        ))}
                    </RacerList>
                </RacerListContainer>
                
            </Section>
        </div>
    </Layout>
)

export const query = graphql`
    query {
        allSanityRacers {
            edges {
                node {
                    url {
                        current
                    }
                    profile {
                        racerName
                        racerImage {
                            asset {
                                fixed(width: 200, height: 200) {
                                    ...GatsbySanityImageFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default RacersPage
