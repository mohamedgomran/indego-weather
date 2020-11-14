import winston from 'winston';
import config from '../config';

const { log: { level } } = config;

const {

  combine, json, timestamp,
} = winston.format;

const logger = winston.createLogger({
  level,
  format: combine(
    timestamp(),
    json({ space: 4 }),
  ),
  transports: [
    new winston.transports.Console({}),
  ],
});

export default logger;
