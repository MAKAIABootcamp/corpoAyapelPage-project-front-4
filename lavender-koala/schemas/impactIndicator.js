// schemas/pet.js
export default {
    name: 'ImpactIndicator',
    type: 'document',
    title: 'Indicadores de impacto',
    fields: [
        {
            name: "getionSocial",
            type: "array",
            title: "Gestión social",
            of: [
                {
                    type: 'document',
                    fields: [
                        {
                            name: 'text',
                            title: 'Descripción del indicador',
                            type: 'string',
                        },
                        {
                            name: "indicator",
                            type: "string",
                            title: "Indicador"
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
            ]




        },
        {
            name: "gestionEconomica",
            type: "array",
            title: "Gestión económica",
            of: [
                {
                    type: 'document',
                    fields: [
                        {
                            name: 'text',
                            title: 'Descripción del indicador',
                            type: 'string',
                        },
                        {
                            name: "indicator",
                            type: "string",
                            title: "Indicador"
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
            ]




        },
        {
            name: "gestionAmbiental",
            type: "array",
            title: "Gestión ambiental",
            of: [
                {
                    type: 'document',
                    fields: [
                        {
                            name: 'text',
                            title: 'Descripción del indicador',
                            type: 'string',
                        },
                        {
                            name: "indicator",
                            type: "string",
                            title: "Indicador"
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
            ]




        }
        
    ]
}