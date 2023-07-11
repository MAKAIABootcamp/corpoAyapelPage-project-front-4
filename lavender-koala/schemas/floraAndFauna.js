// schemas/pet.js
export default {
    name: 'floraAndFauna',
    title: 'Flora y Fauna',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Nombre de la sección',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Descripción de textos',
            type: 'array',
            of: [
                {
                    type: 'document',
                    fields: [
                        {
                            name: 'text',
                            title: 'Descripción de la flora y fauna',
                            type: 'string',
                        }
                    ]
                }
            ]
        },
        {
            name: 'imageCollection',
            title: 'Imagenes de flora y fauna',
            type: 'array',
            of: [
                {
                    type: 'document',
                    fields: [
                        {
                            name: 'image',
                            title: 'Imagen de perfil',
                            type: 'image',
                            options: {
                                hotspot: true,
                            }
                        }
                    ],
                },
            ],
        },
    ],
}
