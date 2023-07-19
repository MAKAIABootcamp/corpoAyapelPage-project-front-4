// schemas/pet.js
export default {
    name: 'gestionAmbiental',
    type: 'document',
    title: 'GestionAmbiental',
    fields: [
      {
        name: 'titleContent',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'textContent',
        type: 'string',
        title: 'text',
      },
      {
        name: 'listContent',
        type: 'array',
        title: 'List',
        of: [{ type: 'string' }],
      },
    ],
  }
  