// schemas/pet.js
export default {
    name: 'PersonasImpactadas',
    type: 'document',
    title: 'Personas Impactadas',
    fields: [
        {
            name: "title",
            type: "string",
            title: "Titulo"
        },
        {
            name: 'mainImage',
            title: 'Imagen Personas Impactadas',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}