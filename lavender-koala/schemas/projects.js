// schemas/pet.js
export default {
  name: 'proyectos',
  type: 'document',
  title: 'Proyectos',
  fields: [
    {
      name: 'gestion',
      type: 'string',
      title: 'Tipo Gestion',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      type: 'string',
      title: 'Titulo del Proyecto',
    },
    {
      name: 'content',
      type: 'string',
      title: 'Contenido del Proyecto',
    },
  ],
}
