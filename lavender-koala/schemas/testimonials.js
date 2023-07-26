// schemas/pet.js
export default {
    name: 'testimonios',
    type: 'document',
    title: 'Testimonios',
    fields: [
        {
            name: "nombre",
            type: "string",
            title: "nombre"
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'texto',
            type: 'string',
            title: 'Descripcion'
        }

    ]
}