import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
    const racer = data.sanityRacers
    return (
        <Layout>
            <Img fixed={racer.profile.racerImage.asset.fixed} alt={`${racer.profile.racerName} profile picture`} />
            <h2>{racer.profile.racerName}</h2>
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
                            fixed(width: 300) {
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
                        fixed(width: 50) {
                            ...GatsbySanityImageFixed
                        }
                    }
                }
            }
        }
    }
`