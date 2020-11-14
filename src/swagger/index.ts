import conf from './conf';
import paths from './paths';

const swaggerDocs = {
  ...conf,
  paths,
  components: {
    securitySchemes: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'authorization',
      },
    },
  },
  security: [
    { JWT: [] },
  ],
};
export default swaggerDocs;
