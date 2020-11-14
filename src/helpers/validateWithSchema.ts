import Ajv from 'ajv';
import CustomError from './customError';

const ajv = new Ajv({
  allErrors: true,
  coerceTypes: true,
});

/**
 * Adds new format for ajv validation
 */
ajv.addFormat('date-time', (dateTimeString) => !Number.isNaN(Date.parse(dateTimeString)));

/**
 * Validates data object agains json schema
 * @param schema is the json schema
 * @param data is the data to be validated
 */
const validateWithSchema = (schema: object, data: object) => {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (valid) return valid;
  throw new CustomError(422, 'VALIDATION_ERROR', 'data submited is not valid', validate.errors);
};

export default validateWithSchema;
