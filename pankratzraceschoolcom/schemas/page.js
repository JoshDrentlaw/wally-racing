export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'page',
      subtitle: 'title',
      media: 'mainImage'
    }
  }
}
