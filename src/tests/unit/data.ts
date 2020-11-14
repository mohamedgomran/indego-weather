export default {
  validateWithSchema: {
    valid: {
      schema: {
        properties: {
          id: { type: 'number' },
        },
      },
      data: {
        id: 11,
      },
    },
    shouldThrow: {
      schema: {
        properties: {
          id: { type: 'number' },
        },
        required: ['id'],
      },
      data: {},
    },
  },
  mapAxiosError: {
    shouldReturnErrorData: {
      data: {
        response: {
          data: {
            code: 'NOT_FOUND',
            message: 'Fot found',
            details: ['not found'],
          },
          status: 404,
        },
      },
      expected: {
        statusCode: 404,
        code: 'NOT_FOUND',
        message: 'Fot found',
        details: ['not found'],
      },
    },
    shouldReturnInvalidRequestCode: {
      data: {
        response: {
          data: {
            message: 'Fot found',
            details: ['not found'],
          },
          status: 404,
        },
      },
    },
    shouldReturnStatusCode504: {
      data: {
        code: 'ECONNABORTED',
        message: 'ECONNABORTED',
      },
      expected: {
        statusCode: 504,
        code: 'ECONNABORTED',
        message: 'ECONNABORTED',
        details: [],
      },
    },
    shouldReturnStatusCode503: {
      data: {

      },
      expected: {
        statusCode: 503,
        code: 'SERVICE_UNAVAILABLE',
        message: 'intenal server error',
        details: [],
      },
    },
  },
};
