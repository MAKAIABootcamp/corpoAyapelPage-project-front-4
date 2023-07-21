// schemas/pet.js
export default {
    name: 'nuestrosProyecto',
    type: 'document',
      title: 'NuestrosProyecto',
    fields: [
        {
            name: 'mainImage',
            title: 'Imagen de Fondo',
            type: 'image',
            options: {
              hotspot: true
            }
          },
      {
        name: 'content',
        type: 'string',
        title: 'Titulo'
      },
      {
        name: 'content2',
        type: 'string',
        title: 'Sub Titulo'
      },
      {
        name: 'text',
        type: 'string',
        title: 'Texto',
      },
      {
        name: 'textContent',
        type: 'string',
        title: 'Texto Segundario',
      },
      {
        name: 'mainImage2',
        title: 'Imagen',
        type: 'image',
        options: {
          hotspot: true
        }
      },
    
    ]
  }