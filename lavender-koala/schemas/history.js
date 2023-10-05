export default {
  name: 'history',
  type: 'document',
  title: 'Historia',
  fields: [
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'historyIndex',
              type: 'number',
              title: 'Posicion',
            },
            {
              name: 'historyPosition',
              type: 'string',
              title: 'Orden',
            },
            {
              name: 'historyImage',
              type: 'image',
              title: 'Imagen',
            },
            {
              name: 'historyTitle',
              type: 'string',
              title: 'Titulo',
            },
            {
              name: 'historyText',
              type: 'text',
              title: 'Texto',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'items.0.historyTitle', // Utiliza el título del primer elemento
      // Puedes personalizar más campos de vista previa si es necesario
    }
    }
}
