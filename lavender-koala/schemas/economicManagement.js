// schemas/pet.js
export default {
  name: 'gestionEconomica',
  type: 'document',
  title: 'GestionEconomica',
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
  ],
}
