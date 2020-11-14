import validateWithSchema from '../../helpers/validateWithSchema';
import testData from './data';

describe('validateWithSchema', () => {
  test('return valid', () => {
    const { validateWithSchema: { valid: { schema, data } } } = testData;
    expect(validateWithSchema(schema, data)).toBe(true);
  });

  test('throw error data submited is not valid', () => {
    const { validateWithSchema: { shouldThrow: { schema, data } } } = testData;
    expect(() => validateWithSchema(schema, data))
      .toThrow('data submited is not valid');
  });
});
