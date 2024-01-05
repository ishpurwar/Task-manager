const mongoose = require("mongoose");

//coondect db function
const connectDB = (URI) => {
  return mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
