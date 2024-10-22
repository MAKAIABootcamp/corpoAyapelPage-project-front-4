// schemas/pet.js
export default {
    name: 'donationAmount',
    type: 'document',
    title: 'Monto de donacion',
    fields: [
        {
            name: "amount1",
            type: "string",
            title: "Monto Donación N° 1"
        },
        {
            name: "amount2",
            type: "string",
            title: "Monto Donación N° 2"
        },
        {
            name: "amount3",
            type: "string",
            title: "Monto Donación N° 3"
        },
        {
            name: "amount4",
            type: "string",
            title: "Monto Donación N° 4"
        },
        {
            name: "amount5",
            type: "string",
            title: "Monto Donación N° 5"
        },
        {
            name: "amount6",
            type: "string",
            title: "Monto Donación N° 6"
        },
        {
            name: 'temporaryConfig',
            title: 'Configuración Temporal',
            type: 'object',
            fields: [
                {
                    name: 'startDate',
                    title: 'Fecha de Inicio',
                    type: 'date',
                },
                {
                    name: 'endDate',
                    title: 'Fecha de Fin',
                    type: 'date',
                },
                {
                    name: 'newOneTimeAmount',
                    title: 'Nuevo Monto para Donación Única',
                    type: 'string',
                }
            ]
        }
    ],
    
}