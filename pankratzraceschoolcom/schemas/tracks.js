export default {
    name: 'tracks',
    title: 'Tracks',
    type: 'object',
    fields: [
        {
            name: 'trackName',
            title: 'Track Name',
            type: 'string'
        },
        {
            name: 'races',
            title: 'Races',
            type: 'array',
            of: [{type: 'race'}]
        }
        /* {
            name: 'location',
            title: 'Location',
            type: 'geopoint'
        } */
    ]
}