const { customAPIError } = require("../errors/customAPIError");
// this middleware will be used to handle errors in the application and send the response accordingly
const errorHandlerMiddleware = (err, req, res, next) => {
  // if the error is an instance of customAPIError then we will send the response accordingly
  //how we will know that the error is an instance of customAPIError?
  //we will check the error class of the error using instanceof operator e.g. err instanceof customAPIError

  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again later" });
};
module.exports = errorHandlerMiddleware;
