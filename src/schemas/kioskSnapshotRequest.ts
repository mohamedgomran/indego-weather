export default {
  properties: {
    params: {
      type: 'object',
      properties: {
        kioskId: { type: 'number' },
      },
      required: ['kioskId'],
    },
    query: {
      type: 'object',
      properties: {
        at: {
          format: 'date-time',
        },
      },
    },
  },
};
