// here we are creating a custom error class which will be used to create custom errors
class customAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
// this function will be used to create custom errors and call the customAPIError class
const createCustomError = (msg, statusCode) => {
  return new customAPIError(msg, statusCode);
};
module.exports = { createCustomError, customAPIError };
