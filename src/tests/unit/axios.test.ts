import mapAxiosError from '../../helpers/errorMapper/axios';
import testData from './data';

describe('mapAxiosError', () => {
  test('should Return response error data', () => {
    const { mapAxiosError: { shouldReturnErrorData: { data, expected } } } = testData;
    expect(mapAxiosError(data)).toEqual(expected);
  });
  test('should Return invalid request code', () => {
    const { mapAxiosError: { shouldReturnInvalidRequestCode: { data } } } = testData;
    expect(mapAxiosError(data)).toHaveProperty('code', 'INVALID_REQUEST');
  });
  test('should Return status code 504', () => {
    const { mapAxiosError: { shouldReturnStatusCode504: { data, expected } } } = testData;
    expect(mapAxiosError(data)).toEqual(expected);
  });
  test('should Return status code 503', () => {
    const { mapAxiosError: { shouldReturnStatusCode503: { data, expected } } } = testData;
    expect(mapAxiosError(data)).toEqual(expected);
  });
});
