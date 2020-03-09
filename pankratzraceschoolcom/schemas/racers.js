export default {
    name: 'racers',
    title: 'Racers',
    type: 'document',
    fields: [
        {
            name: 'url',
            title: 'URL',
            type: 'slug',
            options: {
                source: 'profile.racerName',
                maxLength: 200
            }
        },
        {
            name: 'profile',
            title: 'Racer Profile',
            type: 'racer'
        },
        {
            name: 'races',
            title: 'Races',
            type: 'array',
            of: [{type: 'tracks'}]
        }
    ],
    preview: {
        select: {
            title: 'profile.racerName',
            media: 'profile.racerImage'
        }
    }
}