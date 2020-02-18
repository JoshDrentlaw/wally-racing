import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Section = styled.section`
    width: 40vw;
    margin: 3em auto 0;
    display: grid;
    grid: 50px 300px 50px / 300px auto;
    grid-template-areas:
        'header table'
        'image table'
        'about table';
    grid-gap: 10px 30px;
    
    h2 {
        grid-area: header;
    }

    #image {
        grid-area: image;
    }

    p {
        grid-area: about;
    }

    #tables {
        grid-area: table;
    }
`

const Track = styled.table`
    width: 100%;
    border: 1px solid black;

    &:not(:last-child) {
        margin-bottom: 2em;
    }

    .trackName {
        padding : 1em 0 1.5em;
    }

    .race td {
        border-bottom: 1px solid black;
        text-align: center;
        padding: 0.5em 1em;
    }
`

export default ({ data }) => {
    const racer = data.sanityRacers
    return (
        <Layout>
            <SEO title={`${racer.profile.racerName} Profile | Wally Prankatz Racing School`} keywords={[
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
            <Section>
                <h2>{racer.profile.racerName} / car name</h2>
                <div id="tables">
                    {racer.races.map((track, i) => (
                        <Track key={i}>
                            <thead>
                                <tr><th className="trackName" colSpan="3"><h3>{track.trackName}</h3></th></tr>
                            </thead>
                            <tbody>
                                {track.races.map((race, j) => (
                                    <tr className="race" key={j*100}>
                                        <td>
                                            <Img fixed={race.carImage.asset.fixed} alt={race.car} />
                                        </td>
                                        <td>{race.position}</td>
                                        <td>{race.car}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Track>
                    ))}
                </div>
                <Img id="image" fixed={racer.profile.racerImage.asset.fixed} alt={`${racer.profile.racerName} profile picture`} />
                <p>{racer.profile.about}</p>
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        sanityRacers(url: { current: {eq: $slug } }) {
            url {
                current
            }
            races {
                trackName
                races {
                    car
                    position
                    carImage {
                        asset {
                            fixed(width: 75) {
                                ...GatsbySanityImageFixed
                            }
                        }
                    }
                }
            }
            profile {
                about
                racerName
                racerImage {
                    asset {
                        fixed(width: 300, height: 300) {
                            ...GatsbySanityImageFixed
                        }
                    }
                }
            }
        }
    }
`