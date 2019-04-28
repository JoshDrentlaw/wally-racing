import React from "react"
import StatTable from '../components/stat-table'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Stats = () => (
    <Layout>
        <SEO title="Stats" keywords={[]} />
        <h1 className="text-5xl text-center font-thin mt-4 mb-8">Racing Stats</h1>
        <StatTable />
    </Layout>
)

export default Stats