import React from "react"

import styled from 'styled-components'
import tw from 'tailwind.macro'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PriceTier = styled.div`
    ${tw`mb-8`}
`

const UL = styled.ul`
    ${tw`list-reset`}
`

const Pricing = () => (
    <Layout>
        <SEO title="Pricing" keywords={[]} />
        <section className="p-8 text-center">
            <h1 className="font-thin mb-4">Pricing</h1>
            <PriceTier id="beginner">
                <h2>Beginner Tier Pricing</h2>
                <UL>
                    <li>
                        <h3>First Item</h3>
                        <p>Here's a little something about the first item.</p>
                    </li>
                    <li>
                        <h3>Second Item</h3>
                        <p>Here's a little something about the second item.</p>
                    </li>
                    <li>
                        <h3>Third Item</h3>
                        <p>Here's a little something about the third item.</p>
                    </li>
                </UL>
            </PriceTier>
            <PriceTier id="intermediate">
                <h2>Intermediate Tier Pricing</h2>
                <UL>
                    <li>
                        <h3>First Item</h3>
                        <p>Here's a little something about the first item.</p>
                    </li>
                    <li>
                        <h3>Second Item</h3>
                        <p>Here's a little something about the second item.</p>
                    </li>
                    <li>
                        <h3>Third Item</h3>
                        <p>Here's a little something about the third item.</p>
                    </li>
                </UL>
            </PriceTier>
            <PriceTier id="advanced">
                <h2>Advanced Tier Pricing</h2>
                <UL>
                    <li>
                        <h3>First Item</h3>
                        <p>Here's a little something about the first item.</p>
                    </li>
                    <li>
                        <h3>Second Item</h3>
                        <p>Here's a little something about the second item.</p>
                    </li>
                    <li>
                        <h3>Third Item</h3>
                        <p>Here's a little something about the third item.</p>
                    </li>
                </UL>
            </PriceTier>
        </section>
    </Layout>
)

export default Pricing
