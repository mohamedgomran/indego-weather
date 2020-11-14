class CustomError extends Error {
  constructor(statusCode: Number, code: string, message: string, details = []) {
    super(message);
    Object.assign(this, {
      statusCode, code, details,
    });
  }
}

export default CustomError;
