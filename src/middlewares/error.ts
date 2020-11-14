import logger from '../helpers/logger';

import errorMapper from '../helpers/errorMapper';

/**
 * Maps any thrown error to the standard error and log it
 * @param err is the thrown error
 * @param req is the express request object
 * @param res is the express response object
 * @param next is the express next function
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err, _req, res, _next) => {
  const customRes = errorMapper(err);
  const unHandledError = customRes.statusCode >= 500;
  res.status(customRes.statusCode).json(customRes);
  logger.error(unHandledError ? 'error' : 'verbose', err);
};
