// schemas/pet.js
export default {
    name: 'socialsMediaUrl',
    type: 'document',
    title: 'Links de Redes Sociales',
    fields: [
        {
            name: "linkWhatsapp",
            type: "string",
            title: "Link a Whatsapp"
        },
        {
            name: "linkInstagram",
            type: "string",
            title: "Link a Instagram"
        },
        {
            name: "linkFacebook",
            type: "string",
            title: "Link a Facebook"
        },
        {
            name: "linkYoutube",
            type: "string",
            title: "Link a Youtube"
        },
        {
            name: "linkDonations",
            type: "string",
            title: "Link a Donaciones"
        },
        {
            name: "linkEmail",
            type: "string",
            title: "Link a Correo"
        },

    ]
}