import React from "react"

import styled from 'styled-components'
import tw from 'tailwind.macro'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PriceTier = styled.div`
    ${tw`mb-8 p-4 border border-black rounded`}
`

const UL = styled.ul`
    ${tw`list-reset text-left`}

    li {
        ${tw`mt-2`}
    }

    h3 {
        ${tw`mt-2`}
    }

    p {
        ${tw`mt-1`}
    }
`

const PriceContainer = styled.div`
    ${tw`flex justify-between items-center`}
`

const Pricing = () => (
    <Layout>
        <SEO title="Pricing" keywords={[]} />
        <section className="mx-auto p-8 text-center md:w-1/2 lg:w-1/3">
            <h1 className="font-thin mb-4">Pricing</h1>
            <PriceTier id="beginner">
                <h2>Beginner Tier Pricing</h2>
                <UL>
                    <li>
                        <PriceContainer>
                            <h3>First Item</h3>
                            <h3>$100</h3>
                        </PriceContainer>
                        <p>Here's a little something about the first item.</p>
                    </li>
                    <li>
                        <PriceContainer>
                            <h3>Second Item</h3>
                            <h3>$50</h3>
                        </PriceContainer>
                        <p>Here's a little something about the second item.</p>
                    </li>
                    <li>
                        <PriceContainer>
                            <h3>Third Item</h3>
                            <h3>$50</h3>
                        </PriceContainer>
                        <p>Here's a little something about the third item.</p>
                    </li>
                </UL>
            </PriceTier>
            <PriceTier id="intermediate">
                <h2>Intermediate Tier Pricing</h2>
                <UL>
                    <li>
                        <PriceContainer>
                            <h3>First Item</h3>
                            <h3>$200</h3>
                        </PriceContainer>
                        <p>Here's a little something about the first item.</p>
                    </li>
                    <li>
                        <PriceContainer>
                            <h3>Second Item</h3>
                            <h3>$100</h3>
                        </PriceContainer>
                        <p>Here's a little something about the second item.</p>
                    </li>
                    <li>
                        <PriceContainer>
                            <h3>Third Item</h3>
                            <h3>$100</h3>
                        </PriceContainer>
                        <p>Here's a little something about the third item.</p>
                    </li>
                </UL>
            </PriceTier>
            <PriceTier id="advanced">
                <h2>Advanced Tier Pricing</h2>
                <UL>
                    <li>
                        <PriceContainer>
                            <h3>First Item</h3>
                            <h3>$300</h3>
                        </PriceContainer>
                        <p>Here's a little something about the first item.</p>
                    </li>
                    <li>
                        <PriceContainer>
                            <h3>Second Item</h3>
                            <h3>$150</h3>
                        </PriceContainer>
                        <p>Here's a little something about the second item.</p>
                    </li>
                    <li>
                        <PriceContainer>
                            <h3>Third Item</h3>
                            <h3>$150</h3>
                        </PriceContainer>
                        <p>Here's a little something about the third item.</p>
                    </li>
                </UL>
            </PriceTier>
        </section>
    </Layout>
)

export default Pricing
