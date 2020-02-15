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
    },
    {
      name: 'video',
      title: 'Video URL',
      type: 'string'
    },
    {
      name: 'videoTitle',
      title: 'Video Title (you won\'t see this, needed for the code)',
      type: 'string'
    },
    {
      name: 'contactNumber',
      title: 'Contact Phone Number',
      type: 'string'
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
