export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
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
      title: 'heading',
      subtitle: 'subHeading',
      media: 'mainImage'
    }
  }
}
