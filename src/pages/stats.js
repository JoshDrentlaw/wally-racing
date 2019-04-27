import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Stats = () => (
    <Layout>
        <SEO title="Stats" keywords={[]} />
        <h1 className="text-center font-thin mt-4 mb-8">Racing Stats</h1>
        <table>
            <tr style={{
                backgroundColor: 'black',
                color: 'white',
            }}>
                <th>Racer</th>
                <th>Track</th>
                <th>Time</th>
                <th>Item 3</th>
                <th>Item 4</th>
            </tr>
            <tr style={{ backgroundColor: 'lightgrey' }}>
                <td>Mike Leach</td>
                <td>San Bernardino</td>
                <td>03:50:44</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Wally Pankratz</td>
                <td>Lake Forest</td>
                <td>10:34:01</td>
                <td></td>
                <td></td>
            </tr>
            <tr style={{ backgroundColor: 'lightgrey' }}>
                <td>Steven Pierce</td>
                <td>Huntington Beach</td>
                <td>10:45:13</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Josh Drentlaw</td>
                <td>Riverside</td>
                <td>04:32:12</td>
                <td></td>
                <td></td>
            </tr>
            <tr style={{ backgroundColor: 'lightgrey' }}>
                <td>Scott Mathews</td>
                <td>Long Beach</td>
                <td>06:55:30</td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </Layout>
)

export default Stats