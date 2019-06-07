import React, { useState } from "react"

import StatTable from '../components/stat-table'
import Card from '../components/card'

import Layout from "../components/layout"
import SEO from "../components/seo"

const stats = [
    {
        racer: 'Mike Leach',
        car: 'Ford Focus Midget',
        track: 'Lake Forest',
        time: '03.45.22',
    },
    {
        racer: 'Mike Leach',
        car: 'Ford Focus Midget',
        track: 'Ventura',
        time: '05.59.01',
    },
    {
        racer: 'Wally Prankatz',
        car: 'Ford Focus Midget',
        track: 'San Bernardino',
        time: '05.25.02',
    },
    {
        racer: 'Josh Drentlaw',
        car: 'Hyundai Accent Midget',
        track: 'Riverside',
        time: '10.37.29',
    },
    {
        racer: 'Scott Mathews',
        car: 'Toyota Offroad Truck',
        track: 'Perris',
        time: '08.15.53',
    },
    {
        racer: 'Steven Pierce',
        car: 'Ford Focus Midget',
        track: 'Ventura',
        time: '07.45.09',
    },
]

const Stats = () => {
    const [racers, setRacers] = useState(stats)

    const buildCards = () => {
        const cards = racers.map((racer) => {
            return (
                <Card
                    header={racer.racer}
                    items={[racer.car, racer.track, racer.time]}
                    button="none"
                />
            )
        })
        return cards
    }

    return(
        <Layout>
            <SEO title="Stats" keywords={[]} />
            <h1 className="text-5xl text-center font-thin mt-4 mb-8">Racing Stats</h1>
            {((typeof window !== 'undefined' && window.innerWidth <= 1024) ?
                buildCards() :
                <StatTable />
            )}
        </Layout>
    )
}

export default Stats