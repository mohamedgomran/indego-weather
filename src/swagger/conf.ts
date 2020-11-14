import config from '../config';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Indego',
    description: 'Indego APIs documentation',
    contact: {
      name: 'API Support',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
    version: '1.0',
  },
  servers: [
    {
      url: `{protocol}://${config.baseUrl}/api/v1`,
      description: 'Development server',
      variables: {
        protocol: {
          enum: ['http', 'https'],
          default: 'https',
        },
      },
    },
  ],
  tags: [
    {
      name: 'IndegoWeather',
    },
  ],
};
