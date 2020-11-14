import { CustomError } from '../../types';

/**
 * Maps an axios error to the statndard error
 * @param err is the axios err to be mapped
 */
const mapAxiosError = (err): CustomError => {
  if (err.response && err.response.data) {
    const {
      code, message, error, details,
    } = err.response.data;
    return {
      statusCode: err.response.status,
      code: code || error || 'INVALID_REQUEST',
      message,
      details: details || [],
    };
  }
  if (err.code === 'ECONNABORTED') {
    return {
      statusCode: 504,
      code: err.code,
      message: err.message,
      details: [],
    };
  }
  return {
    statusCode: 503,
    code: 'SERVICE_UNAVAILABLE',
    message: 'intenal server error',
    details: [],
  };
};

export default mapAxiosError;
