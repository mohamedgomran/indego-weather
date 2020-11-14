import mongoose from 'mongoose';
import logger from '../helpers/logger';
import config from '../config';

const { mongoUrl } = config;

/**
 * Connect to database and emit ready event
 * @param app is the express app
 */
async function dbConnector(app) {
  try {
    mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    mongoose.connection.on('connected', () => {
      logger.info('Connected to MongoDB successfully');
      app.emit('ready');
    });
    mongoose.connection.on('disconnected', () => {
      logger.error('lost connection');
      process.exit(1);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

export default dbConnector;
