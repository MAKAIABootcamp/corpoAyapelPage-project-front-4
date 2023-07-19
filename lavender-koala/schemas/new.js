// schemas/pet.js
export default {
  title: 'Noticias',
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
      validation: Rule => Rule.max(52).error('Porfavor ingresa un texto de introduccion mas corto')
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
      options: {
        source: 'title',
        maxLength: 52, // will be ignored if slugify is set
        slugify: input => input
        .toLowerCase()
        .replace(/[\s_\/]+/g, '-') // Replaces spaces, underscores, and slashes with a hyphen
        .replace(/[^\w-]+/g, '') // Removes any remaining symbols
        .replace(/-$/, '') // Removes trailing hyphen
        .replace(/(-)$/, '') // Removes the final hyphen, if present
        .slice(0, 52)
        
      }
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
        {
          type: 'youtube'
        }
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
