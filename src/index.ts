import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import hemlet from 'helmet';
import { auth, error } from './middlewares';
import logger from './helpers/logger';
import dbConnector from './db';
import config from './config';
import routes from './routes';
import swagger from './swagger';

const { port } = config;

const app: Express = express();

dbConnector(app);

app.use(hemlet());

app.use('/api/v1/explore', swaggerUi.serve, swaggerUi.setup(swagger));

app.use(auth);

app.use('/api/v1', routes.v1);

app.use(error);

if (require.main === module) {
  app.on('ready', () => {
    app.listen(port, () => {
      logger.info(`App is up and running on port: ${port}`);
    });
  });
}

export default app;
