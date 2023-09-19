export default {
  name: "paginas",
  title: "Paginas",
  type: "document",
  fields: [
    {
      name: "titulo",
      title: "Título",
      type: "string",
    },
    {
      title: 'fondos',
      name: 'fondos',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      title: 'Sub Contenido',
      name: 'subcontent',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};