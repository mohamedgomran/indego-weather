/**
 * Get an end from process.env and validate its existance
 * @param envName env name to get
 * @param required is required or not
 */
const getEnv = (envName: string, required: Boolean = true) => {
  if (required && !process.env[envName]) throw new Error(`${envName} missing`);
  return process.env[envName];
};

export default {
  mongoUrl: 'mongodb://localhost:27017/indego' || getEnv('MONGO_URL'),
  port: Number(getEnv('PORT', false)) || 3000,
  baseUrl: getEnv('BASE_URL', false) || 'localhost:3000',
  jwtSecret: getEnv('JWT_SECRET', false) || '7ovQP996cE%VVUzjVw&M4t6#&h0q^',
  nodeEnv: getEnv('NODE_ENV', false) || 'production',
  log: {
    level: getEnv('LOG_LEVEL', false) || 'info',
  },
  indegoUrl: getEnv('INDEGO_URL', false) || 'https://kiosks.bicycletransit.workers.dev/phl',
  openweathermapUrl: getEnv('OPENWEATHERMAP_URL', false) || 'https://api.openweathermap.org/data/2.5/weather',
  openweathermapToken: getEnv('OPENWEATHERMAP_TOKEN', false) || '35798ed41aa14542f9a5198dd86a3087',
};
