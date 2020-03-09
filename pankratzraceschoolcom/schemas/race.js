export default {
    name: 'race',
    title: 'Race',
    type: 'object',
    fields: [
        {
            name: 'position',
            title: 'Position',
            type: 'string',
            options: {
                list: [
                    {title: '🥇  1st', value: '🥇  1st'},
                    {title: '🥈 2nd', value: '🥈 2nd'},
                    {title: '🥉 3rd', value: '🥉 3rd'},
                    {title: '4th', value: '4th'},
                    {title: '5th', value: '5th'},
                    {title: '6th', value: '6th'},
                    {title: '7th', value: '7th'},
                    {title: '8th', value: '8th'},
                    {title: '9th', value: '9th'},
                    {title: '10th', value: '10th'},
                    {title: '11th', value: '11th'},
                    {title: '12th', value: '12th'},
                    {title: '13th', value: '13th'},
                    {title: '14th', value: '14th'},
                    {title: '15th', value: '15th'},
                    {title: '16th', value: '16th'},
                    {title: '17th', value: '17th'},
                    {title: '18th', value: '18th'},
                    {title: '19th', value: '19th'},
                    {title: '20th', value: '20th'}
                ]
            }
        },
        {
            name: 'car',
            title: 'Car',
            type: 'string'
        },
        {
            name: 'carImage',
            title: 'Car Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ],
    preview: {
        select: {
            title: 'position',
            subtitle: 'car',
            media: 'carImage'
        }
    }
}