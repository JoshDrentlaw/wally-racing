export default {
    name: 'racer',
    title: 'Racer',
    type: 'object',
    fields: [
        {
            name: 'racerName',
            title: 'Racer Name',
            type: 'string'
        },
        {
            name: 'racerImage',
            title: 'Racer Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'about',
            title: 'About',
            type: 'string'
        }
    ]
}