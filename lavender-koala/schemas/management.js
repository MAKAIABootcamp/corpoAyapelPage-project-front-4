// schemas/pet.js
export default {
    name: 'gestion',
    type: 'document',
      title: 'Gestion',
    fields: [
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true
            }
          },
      {
        name: 'content',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'content2',
        type: 'string',
        title: 'title2'
      },
      {
        name: 'subcontent',
        type: 'string',
        title: 'subtitle'
      },
      {
        name: 'textcontent',
        type: 'string',
        title: 'texttitle'
      }
    
    ]
  }