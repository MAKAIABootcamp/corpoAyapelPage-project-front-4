// schemas/pet.js
export default {
    name: 'gestion',
    type: 'document',
      title: 'Gestion',
    fields: [
        {
            name: 'mainImage',
            title: 'Imagen',
            type: 'image',
            options: {
              hotspot: true
            }
          },
      {
        name: 'content',
        type: 'string',
        title: 'Titulo Principal'
      },
      {
        name: 'content2',
        type: 'string',
        title: 'Sub Titulo Principal'
      },
      {
        name: 'subcontent',
        type: 'string',
        title: 'Titulo Secundario'
      },
      {
        name: 'textcontent',
        type: 'string',
        title: 'Texto'
      },
      {
        name: 'textcontent2',
        type: 'string',
        title: 'Texto Secundario'
      }
    
    ]
  }