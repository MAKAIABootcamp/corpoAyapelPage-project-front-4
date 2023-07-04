// schemas/pet.js
export default {
  title: 'Novedades',
  name: 'novedades',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Imagen de la Cabecera',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Titulo',
      type: 'string',
    },
    {
      name: 'preview',
      title: 'Texto de introduccion',
      type: 'string',
      validation: Rule => Rule.max(200).error('Porfavor ingresa un texto de introduccion mas corto')
    },
    {
      name: 'slug',
      title: 'Identificador',
      type: 'slug',
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicacion',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'mainImage',
    },
  },
}
