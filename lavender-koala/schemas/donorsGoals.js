// schemas/pet.js
export default {
    name: 'donorsGoals',
    type: 'document',
    title: 'Donadores',
    fields: [
        {
            name: "goal",
            type: "string",
            title: "Meta del mes"
        },
        {
            name: "currentDonors",
            type: "string",
            title: "Numero de Donadores Actuales"
        }
    ]
}