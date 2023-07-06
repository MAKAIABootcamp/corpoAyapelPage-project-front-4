export default {
    title: 'Documentos',
    name: 'documentos',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Titulo del Documento'
      },
      {
        title: 'Release date',
        name: 'year',
        type: 'string',
      },

        {
          title: 'Documento',
          name: 'manuscript',
          type: 'file',
          fields: [
            {
              name: 'description',
              type: 'string',
              title: 'Descripcion'
            }
            // {
            //   name: 'author',
            //   type: 'string',
            //   title: 'Author',
             
            // }
          ]
        }
      ]
    
  }
  