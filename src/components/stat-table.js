import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Table = styled.table`
    ${tw`mx-auto lg:w-1/2 text-center`}

    tr:nth-child(odd):not(:first-child) {
        ${tw`bg-grey-light`}
    }

    tr:nth-child(even) {
        ${tw`bg-grey-dark text-white`}
    }

    tr td {
        ${tw`p-2`}
    }
`

const HeaderRow = styled.tr`
    ${tw`bg-black text-white`}

    th {
        ${tw`p-4 font-black`}
    }
`

export default function StatTable() {
    return (
        <Table>
            <HeaderRow>
                <th>Racer</th>
                <th>Track</th>
                <th>Time</th>
                <th>Item 3</th>
                <th>Item 4</th>
            </HeaderRow>
            <tr>
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
            <tr>
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
            <tr>
                <td>Scott Mathews</td>
                <td>Long Beach</td>
                <td>06:55:30</td>
                <td></td>
                <td></td>
            </tr>
        </Table>
    )
}
