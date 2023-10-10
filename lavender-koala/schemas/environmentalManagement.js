// schemas/pet.js
export default {
    name: 'gestionAmbiental',
    type: 'document',
    title: 'GestionAmbiental',
    fields: [
      {
        name: 'titleContent',
        type: 'string',
        title: 'Titulo',
      },
      {
        name: 'textContent',
        type: 'text',
        title: 'Texto',
      },
      {
        name: 'listContent',
        type: 'array',
        title: 'Lista',
        of: [{ type: 'string' }],
      },
    ],
  }
  