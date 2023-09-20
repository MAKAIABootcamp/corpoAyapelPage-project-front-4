export default {
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'videoFile',
        title: 'Video File',
        type: 'file',
        options: {
          accept: 'video/*', // Esto permite seleccionar archivos de video
        },
      },
    ],
  }
  