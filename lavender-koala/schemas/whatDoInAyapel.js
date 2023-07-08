// schemas/pet.js
export default {
    name: 'whatDoInAyapel',
    title: 'Que hacer en Ayapel',
    type: 'document',
    fields: [
      {
        name: 'backgroundImage',
        title: 'Imagen de la cabecera',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'iconImage',
        title: 'Icono de menú',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'title',
        title: 'Nombre de la actividad',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Descripción de la actividad',
        type: 'text',
      },
      {
        name: 'componentSwiper',
        title: 'Información de un miembro',
        type: 'array',
        of: [
          {
            type: 'document',
            fields: [
              {
                name: 'name',
                title: 'Nombre y Apellido',
                type: 'string',
              },
              {
                name: 'image',
                title: 'Imagen de perfil',
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
              {
                name: 'address',
                title: 'Dirección',
                type: 'string',
              },
              {
                name: 'cellPhone',
                title: 'N° telefono',
                type: 'string',
              },
              {
                name: 'whatsapp',
                title: 'Link de whatsapp',
                type: 'string',
              },
              {
                name: 'instagram',
                title: 'Link de instagram',
                type: 'string',
              },
              {
                name: 'facebook',
                title: 'Link de facebook',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  }
  