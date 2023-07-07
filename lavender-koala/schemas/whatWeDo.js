// schemas/pet.js
export default {
    name: 'masProyectos',
    type: 'document',
      title: 'MasProyectos',
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
      }
    
    ]
  }