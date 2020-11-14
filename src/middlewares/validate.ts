import { NextFunction, Request, Response } from 'express';
import validateWithSchema from '../helpers/validateWithSchema';

/**
 * Validates a request against provided schema
 * @param schema json schema to validate against
 */
const validate = (schema: object) => (req: Request, _res: Response, next: NextFunction) => {
  const valid = validateWithSchema(schema, req);
  if (valid) next();
};

export default validate;
