// schemas/pet.js
export default {
    name: 'masProyectos',
    type: 'document',
      title: 'Carrousel Proyectos',
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
      }
    ]
  }